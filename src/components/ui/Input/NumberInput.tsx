/**
 * This file is based on the Input component from shadcn and customized for our needs.
 *
 * See the official docs for more info:
 * shadcn/ui: https://ui.shadcn.com/docs/components/input
 */

'use client';

import { cn } from '@/lib/tailwind/utils';

import { VariantProps } from 'class-variance-authority';
import { FC, InputHTMLAttributes } from 'react';

import { Input, inputVariants } from './Input';

interface IExceptionSymbolsProps {
  exceptLeadingZero?: boolean;
  exceptNegative?: boolean;
  exceptPlusOperator?: boolean;
  exceptE?: boolean;
  exceptDot?: boolean;
}

interface INumberInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof inputVariants>,
    IExceptionSymbolsProps {}

const zero = '0';
const negative = '-';
const plus = '+';
const e = ['e', 'E'];
const dot = '.';

const handleExceptionSymbols = (
  event: React.KeyboardEvent<HTMLInputElement>,
  exceptionSymbolsProps: IExceptionSymbolsProps,
) => {
  const { key } = event;
  const { exceptDot, exceptE, exceptLeadingZero, exceptNegative, exceptPlusOperator } =
    exceptionSymbolsProps;
  if (exceptDot && key === dot) {
    event.preventDefault();
  }
  if (exceptE && e.includes(key)) {
    event.preventDefault();
  }
  if (exceptLeadingZero && key === zero && event.currentTarget.value === zero) {
    event.preventDefault();
  }
  if (exceptNegative && key === negative) {
    event.preventDefault();
  }
  if (exceptPlusOperator && key === plus) {
    event.preventDefault();
  }
};

const defaultVariant = 'rounded';

export const NumberInput: FC<INumberInputProps> = ({
  className,
  variant = defaultVariant,
  onKeyDown = handleExceptionSymbols,
  exceptDot = true,
  exceptE = true,
  exceptLeadingZero = true,
  exceptNegative = true,
  exceptPlusOperator = true,
  ...props
}) => {
  return (
    <Input
      type={'number'}
      variant={variant}
      className={cn('flex-1', className)}
      onKeyDown={(e) =>
        onKeyDown(e, { exceptDot, exceptE, exceptLeadingZero, exceptNegative, exceptPlusOperator })
      }
      {...props}
    />
  );
};
