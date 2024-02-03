/**
 * This file is based on the DropdownMenu component from shadcn and customized for our needs.
 * The DropdownMenu component of shadcn is based on the DropdownMenu component of Radix UI.
 *
 * We removed the components below from default shadcnUI
 * "DropDownMenuCheckboxItem", "DropdownMenuSeparator","DropdownMenuGroup",
 * "DropdownMenuRadioGroup", "DropdownMenuRadioItem",
 * "DropdownMenuSub","DropdownMenuSubContent","DropdownMenuSubTrigger",
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/dropdown-menu
 * Radix UI: https://www.radix-ui.com/themes/docs/components/dropdown-menu
 */

'use client';

import { cn } from '@/lib/tailwind/utils';

import {
  DropdownMenu as PrimitiveRoot,
  DropdownMenuContent as PrimitiveContent,
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

const DropdownMenuPortal = PrimitivePortal;

const DropdownMenuContent = forwardRef<
  ElementRef<typeof PrimitiveContent>,
  ComponentPropsWithoutRef<typeof PrimitiveContent>
>(({ className, sideOffset = 0, align = 'end', ...props }, ref) => (
  <PrimitivePortal>
    <PrimitiveContent
      ref={ref}
      sideOffset={sideOffset}
      align={align}
      className={cn(
        'z-50 min-w-64 overflow-hidden rounded bg-white text-black shadow-around',
        'data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut',
        className,
      )}
      {...props}
    />
  </PrimitivePortal>
));
DropdownMenuContent.displayName = PrimitiveContent.displayName;

/**
 * You need to wrap each element with this component to set the focus on opening the menu.
 */
const DropdownMenuItem = forwardRef<
  ElementRef<typeof PrimitiveItem>,
  ComponentPropsWithoutRef<typeof PrimitiveItem> & {
    inset?: boolean;
  }
>(({ className, ...props }, ref) => (
  <PrimitiveItem
    ref={ref}
    className={cn(
      'select-none outline-none',
      'border-b border-gray-light last:border-b-0',
      'transition-colors focus:bg-gray-light',
      className,
    )}
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

interface IDropDownMenuIconProps {
  children: ReactElement<FC<SVGAttributes<SVGElement>>>;
  className?: string;
}

/**
 * This is a custom component that we use to wrap the Icon in the button.
 */
const DropdownMenuButtonIcon = forwardRef<HTMLDivElement, IDropDownMenuIconProps>(
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

interface IDropDownMenuLabelProps {
  children: ReactNode;
  className?: string;
}

/**
 * This is a custom component that we use to wrap the text in the button.
 */
const DropdownMenuButtonText = forwardRef<HTMLSpanElement, IDropDownMenuLabelProps>(
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
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
};
