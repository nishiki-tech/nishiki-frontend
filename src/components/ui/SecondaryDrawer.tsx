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
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from 'react';

const SecondaryDrawerRoot = PrimitiveRoot;
const SecondaryDrawerTrigger = PrimitiveTrigger;
const SecondaryDrawerClose = PrimitiveClose;
const SecondaryDrawerPortal = PrimitivePortal;

const SecondaryDrawerOverlay = forwardRef<
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
SecondaryDrawerOverlay.displayName = PrimitiveOverlay.displayName;

interface ISecondaryDrawerContentProps extends ComponentPropsWithoutRef<typeof PrimitiveContent> {}

const SecondaryDrawerContent = forwardRef<
  ElementRef<typeof PrimitiveContent>,
  ISecondaryDrawerContentProps
>(({ className, children, ...props }, ref) => (
  <SecondaryDrawerPortal>
    <SecondaryDrawerOverlay />
    <PrimitiveContent
      ref={ref}
      className={cn(
        'fixed z-50 bg-primary-lightest flex flex-col',
        'inset-x-0 bottom-0 rounded-t h-[calc(100vh-2rem)]',
        'data-[state=open]:animate-slideInFromBottom data-[state=closed]:animate-slideOutToBottom',
        className,
      )}
      {...props}
    >
      {children}
    </PrimitiveContent>
  </SecondaryDrawerPortal>
));
SecondaryDrawerContent.displayName = PrimitiveContent.displayName;

interface ISecondaryDrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
  closeButton?: boolean;
  closeText?: string;
}

const SecondaryDrawerHeader = ({
  className,
  closeButton = true,
  closeText,
  children,
  ...props
}: ISecondaryDrawerHeaderProps) => (
  <div
    className={cn(
      'h-12 shrink-0 px-4 border-b border-primary-light grow-1',
      'relative flex items-center',
      className,
    )}
    {...props}
  >
    {children}
    {closeButton &&
      (closeText ? (
        <SecondaryDrawerClose className={cn('absolute right-0 h-full px-6')}>
          <span>{closeText}</span>
        </SecondaryDrawerClose>
      ) : (
        <SecondaryDrawerClose className={cn('absolute right-0 h-full px-4')}>
          <Icon icon={CrossIcon} size={3.5} />
          <span className="sr-only">Close</span>
        </SecondaryDrawerClose>
      ))}
  </div>
);
SecondaryDrawerHeader.displayName = 'SecondaryDrawerHeader';

/**
 * This is a custom component that we use to wrap the body (between header and footer) of the secondary Drawer.
 */
const SecondaryDrawerBody = forwardRef<ElementRef<'div'>, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-4 overflow-y-auto max-h-full', className)} {...props} />
  ),
);
SecondaryDrawerBody.displayName = 'SecondaryDrawerBody';

const SecondaryDrawerFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-auto px-4 py-5 flex justify-end gap-4 bg-white', className)} {...props} />
);
SecondaryDrawerFooter.displayName = 'SecondaryDrawerFooter';

const SecondaryDrawerTitle = forwardRef<
  ElementRef<typeof PrimitiveTitle>,
  ComponentPropsWithoutRef<typeof PrimitiveTitle>
>(({ className, ...props }, ref) => (
  <PrimitiveTitle ref={ref} className={cn('text-2xl', className)} {...props} />
));
SecondaryDrawerTitle.displayName = PrimitiveTitle.displayName;

const SecondaryDrawerDescription = forwardRef<
  ElementRef<typeof PrimitiveDescription>,
  ComponentPropsWithoutRef<typeof PrimitiveDescription>
>(({ className, ...props }, ref) => (
  <PrimitiveDescription ref={ref} className={cn('', className)} {...props} />
));
SecondaryDrawerDescription.displayName = PrimitiveDescription.displayName;

export {
  SecondaryDrawerBody,
  SecondaryDrawerClose,
  SecondaryDrawerContent,
  SecondaryDrawerDescription,
  SecondaryDrawerFooter,
  SecondaryDrawerHeader,
  SecondaryDrawerOverlay,
  SecondaryDrawerPortal,
  SecondaryDrawerRoot,
  SecondaryDrawerTitle,
  SecondaryDrawerTrigger,
};
