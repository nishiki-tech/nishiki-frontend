'use client';

import { CaretDownIcon } from '@/assets/images/icons';
import { cn } from '@/lib/tailwind/utils';

import { Icon as PrimitiveIcon, Trigger as PrimitiveTrigger } from '@radix-ui/react-select';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Icon, iconVariants } from '../Icon';

const selectTriggerVariants = cva(
  'flex items-center justify-between w-full text-base focus:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        rounded: 'rounded-full bg-white border border-gray pl-6 pr-4 py-4',
        muted: 'bg-transparent border-none',
      },
      h: {
        sm: 'h-10',
        md: 'h-12',
      },
      placeHolderColor: {
        gray: 'data-[placeholder]:text-gray',
      },
    },
    defaultVariants: {
      variant: 'rounded',
      h: 'md',
      placeHolderColor: 'gray',
    },
  },
);

interface ISelectTriggerProps
  extends ComponentPropsWithoutRef<typeof PrimitiveTrigger>,
    VariantProps<typeof selectTriggerVariants> {
  iconProps?: VariantProps<typeof iconVariants>;
}

const defaultIconProps: VariantProps<typeof iconVariants> = {
  size: 2,
  color: 'gray-dark',
};

const SelectTrigger = forwardRef<ElementRef<typeof PrimitiveTrigger>, ISelectTriggerProps>(
  (
    { className, children, variant, h, placeHolderColor, iconProps = defaultIconProps, ...props },
    ref,
  ) => (
    <PrimitiveTrigger
      ref={ref}
      className={cn(selectTriggerVariants({ variant, h, placeHolderColor, className }))}
      {...props}
    >
      {children}
      <PrimitiveIcon asChild>
        <Icon icon={CaretDownIcon} {...iconProps} />
      </PrimitiveIcon>
    </PrimitiveTrigger>
  ),
);
SelectTrigger.displayName = PrimitiveTrigger.displayName;

export { SelectTrigger };
