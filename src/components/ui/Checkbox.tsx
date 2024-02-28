'use client';

/**
 * This file is based on the Checkbox component from shadcn/ui and customized for our needs.
 *  * The Checkbox component of shadcn/ui is based on  Checkbox component of Radix UI.
 *
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/checkbox
 *  * Radix UI: https://www.radix-ui.com/themes/docs/components/checkbox
 *
 */

import { IconCheck } from '@/assets/images/icons';
import { cn } from '@/lib/tailwind/utils';

import { Indicator as CheckboxIndicator, Root as CheckboxRoot } from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Icon } from '.';

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxRoot>,
  ComponentPropsWithoutRef<typeof CheckboxRoot>
>(({ className, ...props }, ref) => (
  <CheckboxRoot
    ref={ref}
    className={cn(
      'h-6 w-6 shrink-0 rounded-sm border-[1.2px] border-primary',
      ' data-[state=checked]:bg-primary',
      className,
    )}
    {...props}
  >
    <CheckboxIndicator className={cn('flex items-center justify-center')}>
      <Icon icon={IconCheck} color="white" size={3.5} />
    </CheckboxIndicator>
  </CheckboxRoot>
));
Checkbox.displayName = CheckboxRoot.displayName;

export { Checkbox };
