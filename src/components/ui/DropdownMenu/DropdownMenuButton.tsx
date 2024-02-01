/**
 * This file is based on the Button component from shadcn and customized for our needs.
 *
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/button
 */
import { cn } from '@/lib/tailwind/utils';

import { Slot } from '@radix-ui/react-slot';
import {
  ButtonHTMLAttributes,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  SVGAttributes,
} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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

export { DropdownMenuButton, DropdownMenuButtonIcon, DropdownMenuButtonText };
