/**
 * This file is based on the Dialog component from shadcn and customized for our needs.
 *
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/dialog
 * Radix UI: https://www.radix-ui.com/themes/docs/components/dialog
 */

'use client';

import { Icon } from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';

export const Root = DialogPrimitive.Root;
export const Trigger = DialogPrimitive.Trigger;
export const Portal = DialogPrimitive.Portal;
export const Close = DialogPrimitive.Close;

export const Overlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
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
Overlay.displayName = DialogPrimitive.Overlay.displayName;

export const Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <Portal>
    <Overlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed z-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
        'w-full rounded',
        'bg-white shadow-lg',
        'data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className={cn('absolute right-2 top-2')}>
        <Icon iconName="close" color="black" size="sm" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </Portal>
));
Content.displayName = DialogPrimitive.Content.displayName;

export const Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('h-12 px-4 border-b border-gray-light', 'flex items-center', className)}
    {...props}
  />
);
Header.displayName = 'DialogHeader';

export const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('px-4 pb-4 flex justify-end gap-4', className)} {...props} />
);
Footer.displayName = 'DialogFooter';

export const Title = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn('text-2xl', className)} {...props} />
));
Title.displayName = DialogPrimitive.Title.displayName;

export const Description = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('', className)} {...props} />
));
Description.displayName = DialogPrimitive.Description.displayName;

/**
 * This is a custom component that we use to wrap the body (between header and footer) of the dialog.
 */
export const Body = React.forwardRef<React.ElementRef<'div'>, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-6 py-4', className)} {...props} />
  ),
);
Body.displayName = 'DialogBody';
