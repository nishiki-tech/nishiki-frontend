'use client';
import { IconCircleCross } from '@/assets/images/icons';
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
    // Input wrapper ref
    const inputWrapperRef = useRef<HTMLDivElement>(null);

    useOutsideClick(inputWrapperRef, handleOutsideClick);

    // If handleClearInput is provided, show the cross button
    const hasCrossButton = !!handleClearInput;

    /**  If handleClearInput is provided, clear the input value on cross button mouse down event.
     * We needed to use mouse down event instead of click event,
     * because click event will be triggered when we key down "enter" on the input.
     */
    const handleCrossButtonMouseDown = () => {
      hasCrossButton && handleClearInput();
    };

    /**
     *  On cross button click, set the focus to the input
     */
    const handleCrossButtonClick = () => {
      // This type narrowing is necessary because ref.current is available only when ref is an object
      if (ref && typeof ref === 'object') ref.current?.focus();
    };

    return (
      <div className="relative flex items-center" ref={inputWrapperRef}>
        <Input
          type="text"
          h={h}
          variant="none"
          className={cn(
            'bg-gray-lightest border-b border-primary py-2',
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
            <Icon icon={IconCircleCross} {...iconProps} />
          </Button>
        )}
      </div>
    );
  },
);

SquareTextInput.displayName = 'SquareTextInput';
