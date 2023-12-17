'use client';

import { CaretDownIcon } from '@/assets/images/icons';
import { cn } from '@/lib/tailwind/utils';

import {
  Content as PrimitiveContent,
  Group as PrimitiveGroup,
  Icon as PrimitiveIcon,
  Item as PrimitiveItem,
  ItemIndicator as PrimitiveItemIndicator,
  ItemText as PrimitiveItemText,
  Label as PrimitiveLabel,
  Portal as PrimitivePortal,
  Root as PrimitiveRoot,
  Trigger as PrimitiveTrigger,
  Value as PrimitiveValue,
  Viewport as PrimitiveViewport,
} from '@radix-ui/react-select';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

// import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Icon } from '../Icon';

const Select = PrimitiveRoot;

const SelectGroup = PrimitiveGroup;

const SelectValue = PrimitiveValue;

const SelectTrigger = forwardRef<
  ElementRef<typeof PrimitiveTrigger>,
  ComponentPropsWithoutRef<typeof PrimitiveTrigger>
>(({ className, children, ...props }, ref) => (
  <PrimitiveTrigger
    ref={ref}
    className={cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className,
    )}
    {...props}
  >
    {children}
    <PrimitiveIcon asChild>
      <Icon icon={CaretDownIcon} size={4} color="gray-dark" />
    </PrimitiveIcon>
  </PrimitiveTrigger>
));
SelectTrigger.displayName = PrimitiveTrigger.displayName;

const SelectContent = forwardRef<
  ElementRef<typeof PrimitiveContent>,
  ComponentPropsWithoutRef<typeof PrimitiveContent>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <PrimitivePortal>
    <PrimitiveContent
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <PrimitiveViewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </PrimitiveViewport>
    </PrimitiveContent>
  </PrimitivePortal>
));
SelectContent.displayName = PrimitiveContent.displayName;

const SelectLabel = forwardRef<
  ElementRef<typeof PrimitiveLabel>,
  ComponentPropsWithoutRef<typeof PrimitiveLabel>
>(({ className, ...props }, ref) => (
  <PrimitiveLabel
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = PrimitiveLabel.displayName;

const SelectItem = forwardRef<
  ElementRef<typeof PrimitiveItem>,
  ComponentPropsWithoutRef<typeof PrimitiveItem>
>(({ className, children, ...props }, ref) => (
  <PrimitiveItem
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <PrimitiveItemIndicator>{/* <Check className="h-4 w-4" /> */}</PrimitiveItemIndicator>
    </span>

    <PrimitiveItemText>{children}</PrimitiveItemText>
  </PrimitiveItem>
));
SelectItem.displayName = PrimitiveItem.displayName;

export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue };
