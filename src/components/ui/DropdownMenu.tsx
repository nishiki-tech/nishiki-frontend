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
import { Slot } from '@radix-ui/react-slot';
import {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  SVGAttributes,
} from 'react';

const DropdownMenu = PrimitiveRoot;

const DropdownMenuTrigger = PrimitiveTrigger;

const DropdownMenuGroup = PrimitiveGroup;

const DropdownMenuPortal = PrimitivePortal;

const DropdownMenuContent = forwardRef<
  ElementRef<typeof PrimitiveContent>,
  ComponentPropsWithoutRef<typeof PrimitiveContent>
  // sideOffset is the vertical distance in pixels from the trigger. Reference(https://www.radix-ui.com/primitives/docs/components/dropdown-menu)
>(({ className, sideOffset = 18, ...props }, ref) => (
  <PrimitivePortal>
    <PrimitiveContent
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[16rem] overflow-hidden rounded bg-white text-black shadow-around',
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
>(({ className, ...props }, ref) => (
  <PrimitiveItem
    ref={ref}
    className={cn('select-none outline-none transition-colors', ' focus:bg-gray-light', className)}
    {...props}
  />
));
DropdownMenuItem.displayName = PrimitiveItem.displayName;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: ReactNode;
}

const DropdownMenuButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn('h-12 flex items-center w-full text-lg', className)} ref={ref} {...props}>
        {children}
      </Comp>
    );
  },
);
DropdownMenuButton.displayName = 'DropdownMenuButton';

interface ISelectionDrawerIconProps {
  children: ReactElement<FC<SVGAttributes<SVGElement>>>;
  className?: string;
}

/**
 * This is a custom component that we use to wrap the Icon in the button.
 */
const DropdownMenuButtonIcon = forwardRef<HTMLDivElement, ISelectionDrawerIconProps>(
  ({ children, className }, ref) => {
    return (
      <div
        className={cn('h-full aspect-square mx-0.5 flex items-center justify-center', className)}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
DropdownMenuButtonIcon.displayName = 'DropdownMenuButtonIcon';

interface ISelectionDrawerLabelProps {
  children: ReactNode;
  className?: string;
}

/**
 * This is a custom component that we use to wrap the text in the button.
 */
const DropdownMenuButtonText = forwardRef<HTMLSpanElement, ISelectionDrawerLabelProps>(
  ({ children, className }, ref) => {
    return (
      <span className={cn(className)} ref={ref}>
        {children}
      </span>
    );
  },
);
DropdownMenuButtonText.displayName = 'DropdownMenuButtonLabel';

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
