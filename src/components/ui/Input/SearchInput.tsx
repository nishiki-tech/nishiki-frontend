'use client';

import { SearchIcon } from '@/assets/images/icons';
import { cn } from '@/lib/tailwind/utils';

import { VariantProps } from 'class-variance-authority';
import { FC, InputHTMLAttributes, useRef } from 'react';

import { Icon, iconVariants } from '../';
import { Input, inputVariants } from './Input';

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
  const { color: iconColor, size: iconSize } = iconProps;

  // logic to focus the input when the user clicks on the container
  const ref = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };
  return (
    <div
      className={cn(
        'flex items-center cursor-text',
        inputVariants({ variant: 'rounded' }),
        className,
      )}
      onClick={focusInput}
    >
      <Icon icon={SearchIcon} color={iconColor} size={iconSize} className="mr-2" />
      <Input type="search" variant="muted" className="flex-1" {...props} ref={ref} />
    </div>
  );
};
