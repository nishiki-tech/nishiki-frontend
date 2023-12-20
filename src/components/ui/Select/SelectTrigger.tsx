'use client';

import { CaretDownIcon } from '@/assets/images/icons';
import { cn } from '@/lib/tailwind/utils';

import { Icon as PrimitiveIcon, Trigger as PrimitiveTrigger } from '@radix-ui/react-select';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Icon, iconVariants } from '../Icon';

const selectTriggerVariants = cva(
  'flex items-center justify-between w-full text-base focus:outline-none disabled:cursor-not-allowed data-[placeholder]:text-gray',
  {
    variants: {
      variant: {
        rounded:
          'rounded-full bg-white border border-gray pl-6 pr-4 py-4 focus:ring-2 focus:ring-primary-dark focus:border-transparent',
      },
      h: {
        md: 'h-12',
      },
    },
    defaultVariants: {
      variant: 'rounded',
      h: 'md',
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
  ({ className, children, variant, h, iconProps = defaultIconProps, ...props }, ref) => (
    <PrimitiveTrigger
      ref={ref}
      className={cn(selectTriggerVariants({ variant, h, className }))}
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
