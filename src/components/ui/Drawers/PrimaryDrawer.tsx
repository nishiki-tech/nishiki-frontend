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

const PrimaryDrawerRoot = BaseDrawerRoot;
const PrimaryDrawerTrigger = BaseDrawerTrigger;
const PrimaryDrawerClose = BaseDrawerClose;
const PrimaryDrawerPortal = BaseDrawerPortal;
const PrimaryDrawerOverlay = BaseDrawerOverlay;

interface IPrimaryDrawerContentProps extends ComponentPropsWithoutRef<typeof BaseDrawerContent> {}

const PrimaryDrawerContent = forwardRef<
  ElementRef<typeof BaseDrawerContent>,
  IPrimaryDrawerContentProps
>(({ className, ...props }, ref) => (
  <BaseDrawerContent className={cn('h-[calc(100vh-2rem)]', className)} {...props} ref={ref} />
));
PrimaryDrawerContent.displayName = 'PrimaryDrawerContent';

interface IPrimaryDrawerHeaderProps extends ComponentPropsWithoutRef<typeof BaseDrawerHeader> {}

const PrimaryDrawerHeader = forwardRef<
  ElementRef<typeof BaseDrawerHeader>,
  IPrimaryDrawerHeaderProps
>(({ className, children, ...props }, ref) => (
  <BaseDrawerHeader
    ref={ref}
    className={cn('px-4 bg-primary-lightest border-b border-primary-light', className)}
    {...props}
  >
    {children}
  </BaseDrawerHeader>
));
PrimaryDrawerHeader.displayName = 'PrimaryDrawerHeader';

interface IPrimaryDrawerBody extends ComponentPropsWithoutRef<typeof BaseDrawerBody> {}

const PrimaryDrawerBody = forwardRef<ElementRef<typeof BaseDrawerBody>, IPrimaryDrawerBody>(
  ({ className, children, ...props }, ref) => (
    <BaseDrawerBody
      ref={ref}
      className={cn('p-4 h-full bg-primary-lightest', className)}
      {...props}
    >
      {children}
    </BaseDrawerBody>
  ),
);
PrimaryDrawerBody.displayName = 'PrimaryDrawerBody';

interface IPrimaryDrawerFooterProps extends ComponentPropsWithoutRef<typeof BaseDrawerFooter> {}

const PrimaryDrawerFooter = forwardRef<
  ElementRef<typeof BaseDrawerFooter>,
  IPrimaryDrawerFooterProps
>(({ className, children, ...props }, ref) => (
  <BaseDrawerFooter ref={ref} className={cn('px-4 py-5 flex justify-end', className)} {...props}>
    {children}
  </BaseDrawerFooter>
));
PrimaryDrawerFooter.displayName = 'PrimaryDrawerFooter';

interface IPrimaryDrawerTitleProps extends ComponentPropsWithoutRef<typeof BaseDrawerHeader> {}

const PrimaryDrawerTitle = forwardRef<ElementRef<typeof BaseDrawerTitle>, IPrimaryDrawerTitleProps>(
  ({ className, ...props }, ref) => (
    <BaseDrawerTitle ref={ref} className={cn('text-xl', className)} {...props} />
  ),
);
PrimaryDrawerTitle.displayName = 'PrimaryDrawerTitle';

export {
  PrimaryDrawerBody,
  PrimaryDrawerClose,
  PrimaryDrawerContent,
  PrimaryDrawerFooter,
  PrimaryDrawerHeader,
  PrimaryDrawerOverlay,
  PrimaryDrawerPortal,
  PrimaryDrawerRoot,
  PrimaryDrawerTitle,
  PrimaryDrawerTrigger,
};
