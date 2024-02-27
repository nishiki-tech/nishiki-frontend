import { cn } from '@/lib/tailwind/utils';

import { ReactNode } from 'react';

interface IH3Props {
  children: ReactNode;
  className?: string;
}

export const H3 = ({ children, className }: IH3Props) => {
  return <h3 className={cn('text-xl', className)}>{children}</h3>;
};
