'use client';

import { cn } from '@/lib/tailwind/utils';

import {
  DropdownMenu as PrimitiveRoot,
  DropdownMenuContent as PrimitiveContent,
  DropdownMenuGroup as PrimitiveGroup,
  DropdownMenuItem as PrimitiveItem,
  DropdownMenuPortal as PrimitivePortal,
  DropdownMenuTrigger as PrimitiveTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import {
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
} from './DropdownMenuButton';

const DropdownMenu = PrimitiveRoot;

const DropdownMenuTrigger = PrimitiveTrigger;

const DropdownMenuGroup = PrimitiveGroup;

const DropdownMenuPortal = PrimitivePortal;

const DropdownMenuContent = forwardRef<
  ElementRef<typeof PrimitiveContent>,
  ComponentPropsWithoutRef<typeof PrimitiveContent>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <PrimitivePortal>
    <PrimitiveContent
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md bg-white p-1 text-black shadow-md',
        // 'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        'data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut',
        className,
      )}
      {...props}
    />
  </PrimitivePortal>
));
DropdownMenuContent.displayName = PrimitiveContent.displayName;

const DropdownMenuItem = forwardRef<
  ElementRef<typeof PrimitiveItem>,
  ComponentPropsWithoutRef<typeof PrimitiveItem> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <PrimitiveItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = PrimitiveItem.displayName;

export {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
};
