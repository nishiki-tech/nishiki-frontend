/**
 * This file is based on the Input component from shadcn and customized for our needs.
 *
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/input
 */

import { cn } from '@/lib/tailwind/utils';

import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes } from 'react';

const inputVariants = cva(
  'flex w-full h-full text-base focus:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        // naming of each variant should be aligned with the design team
        rounded: 'rounded-full bg-white border border-gray px-6 py-4 placeholder:text-gray',
        muted: 'border-none placeholder:text-gray',
        square: 'bg-gray-lightest border-b border-primary pr-2 py-2',
      },
    },
    defaultVariants: {
      variant: 'rounded',
    },
  },
);

export interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input, inputVariants };
