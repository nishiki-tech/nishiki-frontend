import { cn } from '@/lib/tailwind/utils';

import { ReactNode } from 'react';

interface IH2Props {
  children: ReactNode;
  className?: string;
}

export const H2 = ({ children, className }: IH2Props) => {
  return <h2 className={cn('text-xl', className)}>{children}</h2>;
};
