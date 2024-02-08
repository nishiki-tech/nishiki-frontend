/**
 * This file is based on the Dialog component from shadcn and customized for our needs.
 *
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/dialog
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
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from 'react';

const DialogRoot = PrimitiveRoot;
const DialogTrigger = PrimitiveTrigger;
const DialogPortal = PrimitivePortal;
const DialogClose = PrimitiveClose;

const DialogOverlay = forwardRef<
  ElementRef<typeof PrimitiveOverlay>,
  ComponentPropsWithoutRef<typeof PrimitiveOverlay>
>(({ className, ...props }, ref) => (
  <PrimitiveOverlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50',
      'bg-overlay',
      'data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut',
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = PrimitiveOverlay.displayName;

const DialogContent = forwardRef<
  ElementRef<typeof PrimitiveContent>,
  ComponentPropsWithoutRef<typeof PrimitiveContent>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <PrimitiveContent
      ref={ref}
      className={cn(
        'fixed z-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
        'w-full rounded',
        'bg-white shadow-lg',
        'data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut w-[calc(100%-2rem)]',
        className,
      )}
      {...props}
    >
      {children}
      <DialogClose className={cn('absolute right-3 top-3')}>
        <Icon icon={CrossIcon} color="black" size={3.5} />
        <span className="sr-only">Close</span>
      </DialogClose>
    </PrimitiveContent>
  </DialogPortal>
));
DialogContent.displayName = PrimitiveContent.displayName;

const DialogHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('h-12 px-4 border-b border-gray-light', 'flex items-center', className)}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

/**
 * This is a custom component that we use to wrap the body (between header and footer) of the dialog.
 */
const DialogBody = forwardRef<ElementRef<'div'>, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-6 py-4', className)} {...props} />
  ),
);
DialogBody.displayName = 'DialogBody';

const DialogFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('px-4 pb-4 flex justify-end gap-4', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = forwardRef<
  ElementRef<typeof PrimitiveTitle>,
  ComponentPropsWithoutRef<typeof PrimitiveTitle>
>(({ className, ...props }, ref) => (
  <PrimitiveTitle ref={ref} className={cn('text-2xl', className)} {...props} />
));
DialogTitle.displayName = PrimitiveTitle.displayName;

const DialogDescription = forwardRef<
  ElementRef<typeof PrimitiveDescription>,
  ComponentPropsWithoutRef<typeof PrimitiveDescription>
>(({ className, ...props }, ref) => (
  <PrimitiveDescription ref={ref} className={cn('', className)} {...props} />
));
DialogDescription.displayName = PrimitiveDescription.displayName;

export {
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
};
