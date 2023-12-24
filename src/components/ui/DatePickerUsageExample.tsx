'use client';

import { DatePicker } from '@/components/ui/DatePicker';

import { useState } from 'react';

export const DatePickerUsageExample = () => {
  const [date, setDate] = useState<Date | undefined>();

  return <DatePicker date={date} setDate={setDate} />;
};
