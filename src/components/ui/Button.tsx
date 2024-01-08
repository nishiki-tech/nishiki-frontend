/**
 * This file is based on the Button component from shadcn and customized for our needs.
 *
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/button
 */
import { cn } from '@/lib/tailwind/utils';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
  'text-base min-w-[70px] rounded inline-flex items-center justify-center gap-2.5',
  {
    variants: {
      variant: {
        none: 'min-w-0',
        primary: 'bg-primary text-white hover:bg-primary-dark',
        error: 'bg-danger text-white hover:bg-danger-dark',
        cancel: 'bg-transparent text-black hover:bg-gray-light',
        ghost: 'bg-transparent',
      },
      size: {
        none: '',
        sm: 'h-8 px-7',
        md: 'h-10 px-12',
        lg: 'h-12 px-12',
        icon: 'h-12 w-12 min-w-0',
      },
    },
    defaultVariants: {
      variant: 'none',
      size: 'none',
    },
  },
);

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
