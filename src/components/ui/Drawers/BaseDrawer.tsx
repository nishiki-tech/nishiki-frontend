/**
 * This file defines the base Drawer component.
 * When an actual Drawer component is needed,
 * it's necessary to create separate component files
 * for each specific use, inheriting from the components in this file.
 *
 * This base Drawer component file defines only the minimal styles
 * that are common across all drawers in the project.
 *
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
  Close as PrimitiveClose,
  Content as PrimitiveContent,
  // Description as PrimitiveDescription,
  Overlay as PrimitiveOverlay,
  Portal as PrimitivePortal,
  Root as PrimitiveRoot,
  Title as PrimitiveTitle,
  Trigger as PrimitiveTrigger,
} from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from 'react';

const BaseDrawerRoot = PrimitiveRoot;
const BaseDrawerTrigger = PrimitiveTrigger;
const BaseDrawerClose = PrimitiveClose;
const BaseDrawerPortal = PrimitivePortal;

const BaseDrawerOverlay = forwardRef<
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
BaseDrawerOverlay.displayName = 'BaseDrawerOverlay';

const BaseDrawerVariants = cva(cn('fixed z-50 bg-white flex flex-col'), {
  variants: {
    side: {
      bottom: cn(
        'inset-x-0 bottom-0 rounded-t max-h-[calc(100vh-2rem)]',
        'data-[state=open]:animate-slideInFromBottom data-[state=closed]:animate-slideOutToBottom',
      ),
      right: cn(
        'inset-y-0 right-0 h-full w-5/6 max-w-sm',
        'data-[state=open]:animate-slideInFromRight data-[state=closed]:animate-slideOutToRight',
      ),
    },
  },
  defaultVariants: {
    side: 'bottom',
  },
});

interface IBaseDrawerContentProps
  extends ComponentPropsWithoutRef<typeof PrimitiveContent>,
    VariantProps<typeof BaseDrawerVariants> {}

const BaseDrawerContent = forwardRef<ElementRef<typeof PrimitiveContent>, IBaseDrawerContentProps>(
  ({ side, className, children, ...props }, ref) => (
    <BaseDrawerPortal>
      <BaseDrawerOverlay />
      <PrimitiveContent
        ref={ref}
        className={cn(BaseDrawerVariants({ side }), className)}
        {...props}
      >
        {children}
      </PrimitiveContent>
    </BaseDrawerPortal>
  ),
);
BaseDrawerContent.displayName = 'BaseDrawerContent';

interface IBaseDrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
  closeButton?: boolean;
}

const BaseDrawerHeader = forwardRef<HTMLDivElement, IBaseDrawerHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'h-12 shrink-0 rounded-t-[inherit] grow-1 relative flex items-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
BaseDrawerHeader.displayName = 'BaseDrawerHeader';

/**
 * This is a custom component that we use to wrap the body (between header and footer) of the dialog.
 */
const BaseDrawerBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('overflow-y-auto max-h-full', className)} {...props} />
  ),
);
BaseDrawerBody.displayName = 'BaseDrawerBody';

interface IBaseDrawerFooterProps extends HTMLAttributes<HTMLDivElement> {}

const BaseDrawerFooter = forwardRef<HTMLDivElement, IBaseDrawerFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center', className)} {...props} />
  ),
);
BaseDrawerFooter.displayName = 'BaseDrawerFooter';

const BaseDrawerTitle = forwardRef<
  ElementRef<typeof PrimitiveTitle>,
  ComponentPropsWithoutRef<typeof PrimitiveTitle>
>(({ className, ...props }, ref) => (
  <PrimitiveTitle ref={ref} className={cn('', className)} {...props} />
));
BaseDrawerTitle.displayName = 'BaseDrawerTitle';

/**
 * Uncomment the following code when you need
 */
// const BaseDrawerDescription = forwardRef<
//   ElementRef<typeof PrimitiveDescription>,
//   ComponentPropsWithoutRef<typeof PrimitiveDescription>
// >(({ className, ...props }, ref) => (
//   <PrimitiveDescription ref={ref} className={className} {...props} />
// ));
// BaseDrawerDescription.displayName = 'BaseDrawerDescription';

export {
  BaseDrawerBody,
  BaseDrawerClose,
  BaseDrawerContent,
  // BaseDrawerDescription,
  BaseDrawerFooter,
  BaseDrawerHeader,
  BaseDrawerOverlay,
  BaseDrawerPortal,
  BaseDrawerRoot,
  BaseDrawerTitle,
  BaseDrawerTrigger,
  BaseDrawerVariants,
};
