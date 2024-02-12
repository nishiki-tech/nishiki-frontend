'use client';
import { CircleCrossIcon } from '@/assets/images/icons';
import { cn } from '@/lib/tailwind/utils';

import { VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes, useEffect, useRef } from 'react';

import { Button } from '../Button';
import { Icon, iconVariants } from '../Icon';
import { Input, inputVariants } from './Input';

interface ISquareTextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Executed when the cross button is clicked
   */
  handleCrossButtonClick: () => void;
  /**
   * Executed when outside of the input is clicked. Will not be invoked when cross button is clicked.
   */
  handleOutsideClick: () => void;
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
      handleCrossButtonClick,
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
    useEffect(() => {
      /**
       * Invoke the handleOutsideClick function if clicked on outside of element
       * @param event - The mouse event
       */
      const callback = (event: MouseEvent) => {
        if (inputWrapperRef?.current && !inputWrapperRef.current.contains(event.target as Node)) {
          handleOutsideClick();
        }
      };

      // Bind the event listener
      document.addEventListener('mousedown', callback);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', callback);
      };
    }, [handleOutsideClick, inputWrapperRef]);

    return (
      <div className="relative flex items-center" ref={inputWrapperRef}>
        <Input
          type="text"
          h={h}
          variant="none"
          className={cn(
            'bg-gray-lightest border-b border-primary py-2 pl-2 pr-10 text-lg',
            className,
          )}
          ref={ref}
          {...props}
        />
        <Button
          variant="ghost"
          className="absolute right-0 w-10 h-full"
          onClick={handleCrossButtonClick}
        >
          <Icon icon={CircleCrossIcon} {...iconProps} />
        </Button>
      </div>
    );
  },
);

SquareTextInput.displayName = 'SquareTextInput';
