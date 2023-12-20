'use client';

import { cn } from '@/lib/tailwind/utils';

import {
  Content as PrimitiveContent,
  Group as PrimitiveGroup,
  Item as PrimitiveItem,
  ItemText as PrimitiveItemText,
  Label as PrimitiveLabel,
  Portal as PrimitivePortal,
  Root as PrimitiveRoot,
  Value as PrimitiveValue,
  Viewport as PrimitiveViewport,
} from '@radix-ui/react-select';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const Select = PrimitiveRoot;

const SelectGroup = PrimitiveGroup;

const SelectValue = PrimitiveValue;

const SelectContent = forwardRef<
  ElementRef<typeof PrimitiveContent>,
  ComponentPropsWithoutRef<typeof PrimitiveContent>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <PrimitivePortal>
    <PrimitiveContent
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-32 max-w-full overflow-hidden rounded',
        ' bg-white text-black shadow-md',
        'data-[state=open]:animate-fadeIn',
        className,
      )}
      position={position}
      {...props}
    >
      <PrimitiveViewport
        className={cn(
          'p-1',
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
    className={cn('py-2 pl-6 pr-2 text-sm font-semibold', className)}
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
      'relative flex items-center',
      'w-full rounded-sm text-sm outline-none  focus:bg-gray-light',
      ' py-2 pl-6 pr-2 ',
      'cursor-default select-none',
      ' data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <PrimitiveItemText>{children}</PrimitiveItemText>
  </PrimitiveItem>
));
SelectItem.displayName = PrimitiveItem.displayName;

export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue };
