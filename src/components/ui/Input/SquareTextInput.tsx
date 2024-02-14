'use client';
import { CircleCrossIcon } from '@/assets/images/icons';
import { useOutsideClick } from '@/hooks';
import { cn } from '@/lib/tailwind/utils';

import { VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes, useRef } from 'react';

import { Button } from '../Button';
import { Icon, iconVariants } from '../Icon';
import { Input, inputVariants } from './Input';

interface ISquareTextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Function to clear the input value with cross button
   */
  handleClearInput?: () => void;
  /**
   * Executed when outside of the input is clicked. Will not be invoked when cross button is clicked.
   */
  handleOutsideClick?: () => void;
  /**
   * The height of the input. Default is 'sm'
   */
  h?: VariantProps<typeof inputVariants>['h'];
  /**
   * Props for the icon. Default is { size: 4, color: 'gray-dark' }
   */
  iconProps?: VariantProps<typeof iconVariants>;
}

const defaultIconProps: VariantProps<typeof iconVariants> = {
  size: 4,
  color: 'gray-dark',
};

const defaultHeight = 'sm';

export const SquareTextInput = forwardRef<HTMLInputElement, ISquareTextInputProps>(
  (
    {
      handleClearInput,
      handleOutsideClick,
      h = defaultHeight,
      iconProps = defaultIconProps,
      className,
      ...props
    },
    ref,
  ) => {
    // input wrapper ref
    const inputWrapperRef = useRef<HTMLDivElement>(null);

    useOutsideClick(inputWrapperRef, handleOutsideClick);

    const hasCrossButton = !!handleClearInput;

    const handleCrossButtonMouseDown = () => {
      hasCrossButton && handleClearInput();
    };

    const handleCrossButtonClick = () => {
      if (ref && typeof ref === 'object') {
        ref.current?.focus();
      }
    };

    return (
      <div className="relative flex items-center" ref={inputWrapperRef}>
        <Input
          type="text"
          h={h}
          variant="none"
          className={cn(
            'bg-gray-lightest border-b border-primary py-2 text-lg',
            hasCrossButton ? 'pl-2 pr-10' : 'px-2',
            className,
          )}
          ref={ref}
          {...props}
        />
        {hasCrossButton && (
          <Button
            variant="ghost"
            className="absolute right-0 w-10 h-full"
            onMouseDown={handleCrossButtonMouseDown}
            onClick={handleCrossButtonClick}
          >
            <Icon icon={CircleCrossIcon} {...iconProps} />
          </Button>
        )}
      </div>
    );
  },
);

SquareTextInput.displayName = 'SquareTextInput';
