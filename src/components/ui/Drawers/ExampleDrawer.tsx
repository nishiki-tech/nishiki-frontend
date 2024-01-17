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

const ExampleDrawerRoot = BaseDrawerRoot;
const ExampleDrawerTrigger = BaseDrawerTrigger;
const ExampleDrawerClose = BaseDrawerClose;
const ExampleDrawerPortal = BaseDrawerPortal;
const ExampleDrawerOverlay = BaseDrawerOverlay;

interface IExampleDrawerContentProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseDrawerContent>, 'side'> {}

const ExampleDrawerContent = forwardRef<
  ElementRef<typeof BaseDrawerContent>,
  IExampleDrawerContentProps
>(({ className, ...props }, ref) => (
  <BaseDrawerContent
    ref={ref}
    className={cn('h-[calc(100vh-2rem)]', className)}
    side="bottom"
    {...props}
  />
));
ExampleDrawerContent.displayName = 'ExampleDrawerContent';

interface IExampleDrawerHeaderProps extends ComponentPropsWithoutRef<typeof BaseDrawerHeader> {}

const ExampleDrawerHeader = forwardRef<
  ElementRef<typeof BaseDrawerHeader>,
  IExampleDrawerHeaderProps
>(({ className, children, ...props }, ref) => (
  <BaseDrawerHeader
    ref={ref}
    className={cn('px-4 bg-primary-lightest border-b border-primary-light', className)}
    {...props}
  >
    {children}
  </BaseDrawerHeader>
));
ExampleDrawerHeader.displayName = 'ExampleDrawerHeader';

interface IExampleDrawerBody extends ComponentPropsWithoutRef<typeof BaseDrawerBody> {}

const ExampleDrawerBody = forwardRef<ElementRef<typeof BaseDrawerBody>, IExampleDrawerBody>(
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
ExampleDrawerBody.displayName = 'ExampleDrawerBody';

interface IExampleDrawerFooterProps extends ComponentPropsWithoutRef<typeof BaseDrawerFooter> {}

const ExampleDrawerFooter = forwardRef<
  ElementRef<typeof BaseDrawerFooter>,
  IExampleDrawerFooterProps
>(({ className, children, ...props }, ref) => (
  <BaseDrawerFooter ref={ref} className={cn('px-4 py-5 flex justify-end', className)} {...props}>
    {children}
  </BaseDrawerFooter>
));
ExampleDrawerFooter.displayName = 'ExampleDrawerFooter';

interface IExampleDrawerTitleProps extends ComponentPropsWithoutRef<typeof BaseDrawerHeader> {}

const ExampleDrawerTitle = forwardRef<ElementRef<typeof BaseDrawerTitle>, IExampleDrawerTitleProps>(
  ({ className, ...props }, ref) => (
    <BaseDrawerTitle ref={ref} className={cn('text-xl', className)} {...props} />
  ),
);
ExampleDrawerTitle.displayName = 'ExampleDrawerTitle';

export {
  ExampleDrawerBody,
  ExampleDrawerClose,
  ExampleDrawerContent,
  ExampleDrawerFooter,
  ExampleDrawerHeader,
  ExampleDrawerOverlay,
  ExampleDrawerPortal,
  ExampleDrawerRoot,
  ExampleDrawerTitle,
  ExampleDrawerTrigger,
};
