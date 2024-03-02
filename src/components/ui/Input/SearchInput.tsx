'use client';

import { SearchIcon } from '@/assets/images/icons';
import { cn } from '@/lib/tailwind/utils';

import { VariantProps } from 'class-variance-authority';
import { FC, InputHTMLAttributes, useRef } from 'react';

import { Icon, iconVariants } from '../';
import { Input } from './Input';

interface ISearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  iconProps?: VariantProps<typeof iconVariants>;
}

const defaultIconProps: VariantProps<typeof iconVariants> = {
  size: 4,
  color: 'gray',
};

export const SearchInput: FC<ISearchInputProps> = ({
  className,
  iconProps = defaultIconProps,
  ...props
}) => {
  // logic to focus the input when the user clicks on the container
  const ref = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <div className={cn('relative', className)} onClick={focusInput}>
      <Icon icon={SearchIcon} {...iconProps} className="absolute top-4 left-6" />
      <Input type="search" variant="rounded" className="pl-12" ref={ref} {...props} />
    </div>
  );
};
