/**
 * This file serves as an example of how to create a customized drawer for various needs
 * by extending the BaseDrawer.tsx component.
 */
'use client';

import { cn } from '@/lib/tailwind/utils';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import {
  BaseDrawerBody,
  BaseDrawerClose,
  BaseDrawerContent,
  BaseDrawerFooter,
  BaseDrawerHeader,
  BaseDrawerOverlay,
  BaseDrawerPortal,
  BaseDrawerRoot,
  BaseDrawerTitle,
  BaseDrawerTrigger,
} from '.';

const PrimaryBottomDrawerRoot = BaseDrawerRoot;
const PrimaryBottomDrawerTrigger = BaseDrawerTrigger;
const PrimaryBottomDrawerClose = BaseDrawerClose;
const PrimaryBottomDrawerPortal = BaseDrawerPortal;
const PrimaryBottomDrawerOverlay = BaseDrawerOverlay;

interface IPrimaryBottomDrawerContentProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseDrawerContent>, 'side'> {}

const PrimaryBottomDrawerContent = forwardRef<
  ElementRef<typeof BaseDrawerContent>,
  IPrimaryBottomDrawerContentProps
>(({ className, ...props }, ref) => (
  <BaseDrawerContent
    ref={ref}
    className={cn('h-[calc(100vh-2rem)]', className)}
    side="bottom"
    {...props}
  />
));
PrimaryBottomDrawerContent.displayName = 'PrimaryBottomDrawerContent';

interface IPrimaryBottomDrawerHeaderProps
  extends ComponentPropsWithoutRef<typeof BaseDrawerHeader> {}

const PrimaryBottomDrawerHeader = forwardRef<
  ElementRef<typeof BaseDrawerHeader>,
  IPrimaryBottomDrawerHeaderProps
>(({ className, children, ...props }, ref) => (
  <BaseDrawerHeader
    ref={ref}
    className={cn('px-4 bg-primary-lightest border-b border-primary-light', className)}
    {...props}
  >
    {children}
  </BaseDrawerHeader>
));
PrimaryBottomDrawerHeader.displayName = 'PrimaryBottomDrawerHeader';

interface IPrimaryBottomDrawerBody extends ComponentPropsWithoutRef<typeof BaseDrawerBody> {}

const PrimaryBottomDrawerBody = forwardRef<
  ElementRef<typeof BaseDrawerBody>,
  IPrimaryBottomDrawerBody
>(({ className, children, ...props }, ref) => (
  <BaseDrawerBody ref={ref} className={cn('p-4 h-full bg-primary-lightest', className)} {...props}>
    {children}
  </BaseDrawerBody>
));
PrimaryBottomDrawerBody.displayName = 'PrimaryBottomDrawerBody';

interface IPrimaryBottomDrawerFooterProps
  extends ComponentPropsWithoutRef<typeof BaseDrawerFooter> {}

const PrimaryBottomDrawerFooter = forwardRef<
  ElementRef<typeof BaseDrawerFooter>,
  IPrimaryBottomDrawerFooterProps
>(({ className, children, ...props }, ref) => (
  <BaseDrawerFooter ref={ref} className={cn('px-4 py-5 flex justify-end', className)} {...props}>
    {children}
  </BaseDrawerFooter>
));
PrimaryBottomDrawerFooter.displayName = 'PrimaryBottomDrawerFooter';

interface IPrimaryBottomDrawerTitleProps
  extends ComponentPropsWithoutRef<typeof BaseDrawerHeader> {}

const PrimaryBottomDrawerTitle = forwardRef<
  ElementRef<typeof BaseDrawerTitle>,
  IPrimaryBottomDrawerTitleProps
>(({ className, ...props }, ref) => (
  <BaseDrawerTitle ref={ref} className={cn('text-xl', className)} {...props} />
));
PrimaryBottomDrawerTitle.displayName = 'PrimaryBottomDrawerTitle';

export {
  PrimaryBottomDrawerBody,
  PrimaryBottomDrawerClose,
  PrimaryBottomDrawerContent,
  PrimaryBottomDrawerFooter,
  PrimaryBottomDrawerHeader,
  PrimaryBottomDrawerOverlay,
  PrimaryBottomDrawerPortal,
  PrimaryBottomDrawerRoot,
  PrimaryBottomDrawerTitle,
  PrimaryBottomDrawerTrigger,
};
