/**
 * This file is based on the Sheet component from shadcn and customized for our needs.
 * The Sheet component of shadcn is based on the Dialog component of Radix UI.
 *
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/sheet
 * Radix UI: https://www.radix-ui.com/themes/docs/components/dialog
 */
'use client';

import { CrossIcon } from '@/assets/images/icons';
import { Icon } from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import {
  Close as PrimitiveClose,
  Content as PrimitiveContent,
  Description as PrimitiveDescription,
  Overlay as PrimitiveOverlay,
  Portal as PrimitivePortal,
  Root as PrimitiveRoot,
  Title as PrimitiveTitle,
  Trigger as PrimitiveTrigger,
} from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from 'react';

const DrawerRoot = PrimitiveRoot;
const DrawerTrigger = PrimitiveTrigger;
const DrawerClose = PrimitiveClose;
const DrawerPortal = PrimitivePortal;

const DrawerOverlay = forwardRef<
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
DrawerOverlay.displayName = PrimitiveOverlay.displayName;

const DrawerVariants = cva(cn('fixed z-50 bg-white flex flex-col'), {
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

interface IDrawerContentProps
  extends ComponentPropsWithoutRef<typeof PrimitiveContent>,
    VariantProps<typeof DrawerVariants> {}

const DrawerContent = forwardRef<ElementRef<typeof PrimitiveContent>, IDrawerContentProps>(
  ({ side, className, children, ...props }, ref) => (
    <DrawerPortal>
      <DrawerOverlay />
      <PrimitiveContent ref={ref} className={cn(DrawerVariants({ side }), className)} {...props}>
        {children}
        <DrawerClose className={cn('absolute right-3 top-3')}>
          <Icon icon={CrossIcon} color="black" size={3.5} />
          <span className="sr-only">Close</span>
        </DrawerClose>
      </PrimitiveContent>
    </DrawerPortal>
  ),
);
DrawerContent.displayName = PrimitiveContent.displayName;

const DrawerHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'h-12 shrink-0 px-4 border-b border-gray-light grow-1',
      'flex items-center',
      className,
    )}
    {...props}
  />
);
DrawerHeader.displayName = 'DrawerHeader';

/**
 * This is a custom component that we use to wrap the body (between header and footer) of the dialog.
 */
const DrawerBody = forwardRef<ElementRef<'div'>, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-4 pt-4 pb-6 overflow-y-auto max-h-full', className)}
      {...props}
    />
  ),
);
DrawerBody.displayName = 'DrawerBody';

const DrawerFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-auto px-4 pt-2 pb-12 flex justify-end gap-4', className)} {...props} />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = forwardRef<
  ElementRef<typeof PrimitiveTitle>,
  ComponentPropsWithoutRef<typeof PrimitiveTitle>
>(({ className, ...props }, ref) => (
  <PrimitiveTitle ref={ref} className={cn('text-2xl', className)} {...props} />
));
DrawerTitle.displayName = PrimitiveTitle.displayName;

const DrawerDescription = forwardRef<
  ElementRef<typeof PrimitiveDescription>,
  ComponentPropsWithoutRef<typeof PrimitiveDescription>
>(({ className, ...props }, ref) => (
  <PrimitiveDescription ref={ref} className={cn('', className)} {...props} />
));
DrawerDescription.displayName = PrimitiveDescription.displayName;

export {
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  DrawerVariants,
};
