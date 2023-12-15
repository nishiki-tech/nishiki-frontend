/**
 * This file is based on the Sheet component from shadcn and customized for our needs.
 * The Sheet component of shadcn is based on the Dialog component of Radix UI.
 *
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/sheet
 * Radix UI: https://www.radix-ui.com/themes/docs/components/dialog
 */
'use client';

import { cn } from '@/lib/tailwind/utils';

import {
  Content as PrimitiveContent,
  Overlay as PrimitiveOverlay,
  Portal as PrimitivePortal,
  Root as PrimitiveRoot,
  Trigger as PrimitiveTrigger,
} from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const SelectionDrawerRoot = PrimitiveRoot;
const SelectionDrawerTrigger = PrimitiveTrigger;
const SelectionDrawerPortal = PrimitivePortal;

const SelectionDrawerOverlay = forwardRef<
  ElementRef<typeof PrimitiveOverlay>,
  ComponentPropsWithoutRef<typeof PrimitiveOverlay>
>(({ className, ...props }, ref) => (
  <PrimitiveOverlay
    className={cn(
      'fixed inset-0 z-50',
      'bg-overlay',
      'data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut',
      className,
    )}
    {...props}
    ref={ref}
  />
));
SelectionDrawerOverlay.displayName = PrimitiveOverlay.displayName;

const SelectionDrawerVariants = cva(cn('fixed z-50 bg-white flex flex-col'), {
  variants: {
    side: {
      bottom: cn(
        'inset-x-0 bottom-0 rounded-t max-h-full',
        'data-[state=open]:animate-slideInFromBottom data-[state=closed]:animate-slideOutToBottom',
      ),
    },
  },
  defaultVariants: {
    side: 'bottom',
  },
});

interface DrawerContentProps
  extends ComponentPropsWithoutRef<typeof PrimitiveContent>,
    VariantProps<typeof SelectionDrawerVariants> {}

const SelectionDrawerContent = forwardRef<ElementRef<typeof PrimitiveContent>, DrawerContentProps>(
  ({ side, className, children, ...props }, ref) => (
    <SelectionDrawerPortal>
      <SelectionDrawerOverlay />
      <PrimitiveContent
        ref={ref}
        className={cn(SelectionDrawerVariants({ side }), className)}
        {...props}
      >
        {children}
      </PrimitiveContent>
    </SelectionDrawerPortal>
  ),
);
SelectionDrawerContent.displayName = PrimitiveContent.displayName;

export {
  SelectionDrawerContent,
  SelectionDrawerOverlay,
  SelectionDrawerPortal,
  SelectionDrawerRoot,
  SelectionDrawerTrigger,
  SelectionDrawerVariants,
};
