'use client';

import { CaretDownIcon } from '@/assets/images/icons';
import { Icon, iconVariants } from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import { Icon as PrimitiveIcon, Trigger as PrimitiveTrigger } from '@radix-ui/react-select';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const selectTriggerVariants = cva(
  'flex items-center justify-between w-full text-base focus:outline-none disabled:cursor-not-allowed data-[placeholder]:text-gray data-[placeholder]:select-none',
  {
    variants: {
      variant: {
        rounded: cn(
          'rounded-full bg-white border border-gray pl-6 pr-4 py-4',
          'focus:ring-2 focus:ring-primary-dark focus:border-transparent',
          'data-[state=open]:ring-2 data-[state=open]:ring-primary-dark  data-[state=open]:border-transparent',
        ),
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
  size: 2.5,
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
        <Icon icon={CaretDownIcon} size={2.5} {...iconProps} />
      </PrimitiveIcon>
    </PrimitiveTrigger>
  ),
);
SelectTrigger.displayName = PrimitiveTrigger.displayName;

export { SelectTrigger };
