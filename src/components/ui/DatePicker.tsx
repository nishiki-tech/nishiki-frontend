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
import { SelectSingleEventHandler } from 'react-day-picker';

interface IDatePickerProps {
  date?: Date;
  onSelect?: SelectSingleEventHandler;
}

export const DatePicker = ({ date, onSelect }: IDatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="none"
          size="none"
          className={cn(
            inputVariants(),
            'flex items-center pr-4',
            'data-[state=open]:ring-2 data-[state=open]:ring-primary-dark data-[state=open]:border-transparent',
          )}
        >
          {date ? format(date, 'PP') : null}
          <Icon icon={CalendarIcon} size={4} color="gray-dark" className="ml-auto" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-72 h-screen min-h-52">
        <Calendar mode="single" selected={date} onSelect={onSelect} className="h-full" />
      </PopoverContent>
    </Popover>
  );
};
