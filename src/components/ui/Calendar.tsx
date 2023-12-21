'use client';

import { cn } from '@/lib/tailwind/utils';

import { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';

type CalendarProps = ComponentProps<typeof DayPicker>;

const Calendar = ({ className, classNames, ...props }: CalendarProps) => {
  return (
    <DayPicker
      captionLayout="buttons"
      fixedWeeks
      showOutsideDays
      className={cn('p-3 rounded bg-white max-w-md', className)}
      classNames={{
        caption: 'h-10 mb-2 flex justify-center relative items-center',
        nav: 'flex items-center',
        nav_button: 'h-full px-3 rounded-md flex items-center justify-center hover:bg-gray-light',
        nav_button_previous: 'absolute left-0',
        nav_button_next: 'absolute right-0',
        table: 'w-full',
        head_row: 'grid grid-cols-7 text-gray-dark',
        head_cell: 'text-xs font-normal',
        row: 'grid grid-cols-7',
        cell: 'h-12 text-sm relative select-none focus-within:relative focus-within:z-20',
        day: 'w-full h-full rounded-md flex justify-center items-center hover:bg-gray-light',
        day_selected: 'bg-gray hover:bg-gray focus:bg-gray',
        day_today: 'font-extrabold',
        day_outside: 'text-gray aria-selected:bg-gray aria-selected:text-black',
        ...classNames,
      }}
      {...props}
    />
  );
};
Calendar.displayName = 'Calendar';

export { Calendar };
