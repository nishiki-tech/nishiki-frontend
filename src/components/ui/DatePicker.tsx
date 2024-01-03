'use client';

import { CalendarIcon } from '@/assets/images/icons';
import {
  Button,
  Calendar,
  Icon,
  inputVariants,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import { format } from 'date-fns';
import { ButtonHTMLAttributes } from 'react';
import { SelectSingleEventHandler } from 'react-day-picker';

interface IDatePickerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onSelect'> {
  date?: Date;
  onSelect?: SelectSingleEventHandler;
  className?: string;
}

export const DatePicker = ({ date, onSelect, className, ...buttonProps }: IDatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            inputVariants(),
            'flex justify-between items-center pr-4',
            'data-[state=open]:ring-2 data-[state=open]:ring-primary-dark data-[state=open]:border-transparent',
            className,
          )}
          {...buttonProps}
        >
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {date ? format(date, 'PP') : null}
          </span>
          <Icon icon={CalendarIcon} size={4} color="gray-dark" className="shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-72 h-screen min-h-52">
        <Calendar mode="single" selected={date} onSelect={onSelect} className="h-full" />
      </PopoverContent>
    </Popover>
  );
};
