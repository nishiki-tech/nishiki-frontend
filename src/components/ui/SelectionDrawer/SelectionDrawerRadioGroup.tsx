/**
 * This file is based on the Radio Group component from shadcn and customized for our needs.
 *
 * See the official docs for more info:
 * shadcn/ui:https://ui.shadcn.com/docs/components/radio-group
 * Radix UI: https://www.radix-ui.com/primitives/docs/components/radio-group
 */
import { cn } from '@/lib/tailwind/utils';

import {
  Indicator as PrimitiveIndicator,
  Item as PrimitiveItem,
  Root as PrimitiveRoot,
} from '@radix-ui/react-radio-group';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const SelectionDrawerRadioGroup = forwardRef<
  ElementRef<typeof PrimitiveRoot>,
  ComponentPropsWithoutRef<typeof PrimitiveRoot>
>(({ className, ...props }, ref) => {
  return <PrimitiveRoot className={cn('', className)} {...props} ref={ref} />;
});
SelectionDrawerRadioGroup.displayName = PrimitiveRoot.displayName;

const SelectionDrawerRadioGroupItem = forwardRef<
  ElementRef<typeof PrimitiveItem>,
  ComponentPropsWithoutRef<typeof PrimitiveItem>
>(({ className, ...props }, ref) => {
  return (
    <PrimitiveItem
      ref={ref}
      className={cn(
        'aspect-square h-6 w-6 rounded-full border border-primary text-primary',
        className,
      )}
      {...props}
    >
      <PrimitiveIndicator className="flex items-center justify-center">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
      </PrimitiveIndicator>
    </PrimitiveItem>
  );
});
SelectionDrawerRadioGroupItem.displayName = PrimitiveItem.displayName;

export { SelectionDrawerRadioGroup, SelectionDrawerRadioGroupItem };
