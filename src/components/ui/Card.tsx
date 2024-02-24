import { cn } from '@/lib/tailwind/utils';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, HTMLAttributes } from 'react';

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Card = forwardRef<HTMLDivElement, ICardProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return <Comp ref={ref} className={cn('bg-white rounded', className)} {...props} />;
  },
);
Card.displayName = 'Card';
export { Card };
