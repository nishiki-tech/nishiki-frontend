/**
 * This file is based on the Badge component from shadcn and customized for our needs.
 *
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/badge
 */
import { cn } from '@/lib/tailwind/utils';

import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const badgeVariants = cva('inline-flex items-center rounded-full text-sm h-6 px-3.5', {
  variants: {
    variant: {
      light: 'bg-primary-light',
      lightest: 'bg-primary-lightest',
      outline: 'bg-gray-lightest border border-primary text-primary',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
});

interface IBadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: IBadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props}></div>;
};

export { Badge, badgeVariants };
