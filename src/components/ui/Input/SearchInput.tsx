/**
 * This file is based on the Input component from shadcn and customized for our needs.
 *
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/input
 */

import { SearchIcon } from '@/assets/images/icons';
import { cn } from '@/lib/tailwind/utils';

import { VariantProps } from 'class-variance-authority';
import { FC, InputHTMLAttributes, ReactNode } from 'react';

import { Icon, iconVariants } from '..';
import { Input, inputVariants } from './Input';

interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  iconProps?: VariantProps<typeof iconVariants>;
}

const defaultIcon = SearchIcon;

const defaultIconProps: VariantProps<typeof iconVariants> = {
  size: 4,
  color: 'gray',
};

export const SearchInput: FC<ISearchInputProps> = (
  { className, type = 'search', icon = defaultIcon, iconProps = defaultIconProps, ...props },
  ref,
) => {
  const { color: iconColor, size: iconSize } = iconProps;
  return (
    <div className={cn('flex items-center', inputVariants({ variant: 'rounded' }))}>
      <Icon icon={icon} color={iconColor} size={iconSize} className="mr-2" />
      <Input
        type={type}
        variant={'muted'}
        className={cn('flex-1', className)}
        ref={ref}
        {...props}
      />
    </div>
  );
};
