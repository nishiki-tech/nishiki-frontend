import { cn } from '@/lib/tailwind/utils';

import { Root as PrimitiveRoot } from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const labelVariants = cva('leading-none');

const Label = forwardRef<
  ElementRef<typeof PrimitiveRoot>,
  ComponentPropsWithoutRef<typeof PrimitiveRoot> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <PrimitiveRoot ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = PrimitiveRoot.displayName;

export { Label };
