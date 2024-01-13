'use client';

import { CheckIcon } from '@/assets/images/icons';
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
      'peer',
      'h-6 w-6 shrink-0 rounded-sm border border-primary',
      'disabled:cursor-not-allowed',
      ' data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      className,
    )}
    {...props}
  >
    <CheckboxIndicator className={cn('flex items-center justify-center')}>
      <Icon icon={CheckIcon} color="white" size={3.5} />
    </CheckboxIndicator>
  </CheckboxRoot>
));
Checkbox.displayName = CheckboxRoot.displayName;

export { Checkbox };
