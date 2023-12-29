'use client';

import { cn } from '@/lib/tailwind/utils';

import {
  Content as PrimitiveContent,
  Portal as PrimitivePortal,
  Root as PrimitiveRoot,
  Trigger as PrimitiveTrigger,
} from '@radix-ui/react-popover';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const Popover = PrimitiveRoot;
const PopoverTrigger = PrimitiveTrigger;

const PopoverContent = forwardRef<
  ElementRef<typeof PrimitiveContent>,
  ComponentPropsWithoutRef<typeof PrimitiveContent>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PrimitivePortal>
    <PrimitiveContent
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-[calc(100vw-1rem)] max-h-[calc(100vh_/_2_-_var(--radix-popover-trigger-height))]',
        'shadow-around rounded-md bg-white',
        'data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn',
        className,
      )}
      {...props}
    />
  </PrimitivePortal>
));
PopoverContent.displayName = PrimitiveContent.displayName;

export { Popover, PopoverContent, PopoverTrigger };
