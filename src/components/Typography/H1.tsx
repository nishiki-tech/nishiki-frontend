import { cn } from '@/lib/tailwind/utils';

import { ReactNode } from 'react';

interface IH1Props {
  children: ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: IH1Props) => {
  return <h1 className={cn('text-2xl', className)}>{children}</h1>;
};
