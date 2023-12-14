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

const SelectionDrawerButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn('h-12 flex items-center w-full text-lg', className)} ref={ref} {...props}>
        {children}
      </Comp>
    );
  },
);
SelectionDrawerButton.displayName = 'SelectionDrawerButton';

interface ISelectionDrawerIconProps {
  children: ReactElement<FC<SVGAttributes<SVGElement>>>;
  className?: string;
}

const SelectionDrawerButtonIcon = forwardRef<HTMLDivElement, ISelectionDrawerIconProps>(
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
SelectionDrawerButtonIcon.displayName = 'SelectionDrawerButtonIcon';

interface ISelectionDrawerLabelProps {
  children: ReactNode;
  className?: string;
}

const SelectionDrawerButtonText = forwardRef<HTMLSpanElement, ISelectionDrawerLabelProps>(
  ({ children, className }, ref) => {
    return (
      <span className={cn(className)} ref={ref}>
        {children}
      </span>
    );
  },
);
SelectionDrawerButtonText.displayName = 'SelectionDrawerButtonLabel';

export { SelectionDrawerButton, SelectionDrawerButtonIcon, SelectionDrawerButtonText };
