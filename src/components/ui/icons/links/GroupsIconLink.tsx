import { mainRouteConfig } from '@/const/site/mainRouteConfig';
import { cn } from '@/lib/tailwind/utils';

import Link from 'next/link';
import React from 'react';

interface Props {
  isSelected: boolean;
  className?: string;
}

const name = 'groups';

export const GroupsIconLink: React.FC<Props> = ({ isSelected, className }) => {
  return (
    <Link
      href={mainRouteConfig[name]}
      className="inline-flex flex-col items-center justify-center px-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={cn(isSelected ? 'stroke-primary' : 'stroke-secondary', className)}
      >
        <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19H6.133Z" />
          <path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1m-5.5-4.5V11m5 .5V11" />
        </g>
      </svg>
      <span className={cn('text-sm', isSelected ? 'text-primary' : 'text-secondary')}>{name}</span>
    </Link>
  );
};
