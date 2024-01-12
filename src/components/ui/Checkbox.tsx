'use client';

import { CheckIcon } from '@/assets/images/icons';
import { cn } from '@/lib/tailwind/utils';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';

import { Icon } from '.';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
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
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center')}>
      <Icon icon={CheckIcon} color="white" size={3.5} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
