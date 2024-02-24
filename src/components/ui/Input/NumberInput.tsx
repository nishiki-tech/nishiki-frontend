'use client';

import { cn } from '@/lib/tailwind/utils';

import { VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes, KeyboardEvent } from 'react';

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
    VariantProps<typeof inputVariants> {
  exceptionSymbolsProps?: Partial<IExceptionSymbolsProps>;
}

const SYMBOLS = {
  zero: '0',
  negative: '-',
  plus: '+',
  e: ['e', 'E'],
  dot: '.',
};

const handleExceptionSymbols = (
  event: KeyboardEvent<HTMLInputElement>,
  exceptionSymbolsProps: IExceptionSymbolsProps,
) => {
  const { key, currentTarget } = event;
  const { exceptDot, exceptE, exceptLeadingZero, exceptNegative, exceptPlusOperator } =
    exceptionSymbolsProps;
  if (
    (exceptDot && key === SYMBOLS.dot) ||
    (exceptE && SYMBOLS.e.includes(key)) ||
    (exceptLeadingZero && key === SYMBOLS.zero && currentTarget.value === SYMBOLS.zero) ||
    (exceptNegative && key === SYMBOLS.negative) ||
    (exceptPlusOperator && key === SYMBOLS.plus)
  ) {
    event.preventDefault();
  }
};

const defaultVariant = 'rounded';

const defaultExceptionSymbols: IExceptionSymbolsProps = {
  exceptDot: false,
  exceptE: true,
  exceptLeadingZero: true,
  exceptNegative: true,
  exceptPlusOperator: true,
};

export const NumberInput = forwardRef<HTMLInputElement, INumberInputProps>(
  (
    {
      className,
      variant = defaultVariant,
      onKeyDown = handleExceptionSymbols,
      exceptionSymbolsProps = defaultExceptionSymbols,
      ...props
    },
    ref,
  ) => {
    return (
      <Input
        type="number"
        variant={variant}
        className={cn('flex-1', className)}
        onKeyDown={(e) => onKeyDown(e, exceptionSymbolsProps)}
        ref={ref}
        {...props}
      />
    );
  },
);

NumberInput.displayName = 'NumberInput';
