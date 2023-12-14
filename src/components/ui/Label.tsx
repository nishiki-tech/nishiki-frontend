import { cn } from '@/lib/tailwind/utils';

import { Root as PrimitiveRoot } from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const labelVariants = cva('leading-none', {
  variants: {
    variant: {
      selectionDrawer: 'h-12 pl-4 flex items-center w-full gap-4 text-lg',
    },
  },
  defaultVariants: {},
});

const Label = forwardRef<
  ElementRef<typeof PrimitiveRoot>,
  ComponentPropsWithoutRef<typeof PrimitiveRoot> & VariantProps<typeof labelVariants>
>(({ className, variant, ...props }, ref) => (
  <PrimitiveRoot ref={ref} className={cn(labelVariants({ variant }), className)} {...props} />
));
Label.displayName = PrimitiveRoot.displayName;

export { Label };
