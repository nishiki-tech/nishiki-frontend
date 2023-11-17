import { mainRouteConfig, MainRouteName } from '@/const/site/mainRouteConfig';
import { cn } from '@/lib/tailwind/utils';

import Link from 'next/link';
import React from 'react';

interface Props {
  name: MainRouteName;
  isSelected: boolean;
  className?: string;
}

const name = 'foods';

const FoodsIconLink: React.FC<Props> = ({ isSelected, className }) => {
  return (
    <Link
      href={mainRouteConfig[name]}
      className="inline-flex flex-col items-center justify-center px-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 48 48"
        className={cn(isSelected ? 'stroke-primary' : 'stroke-secondary', className)}
      >
        <g fill="none" stroke-width="4">
          <path
            d="M24 41.02c2.431 0 3.431 1.31 4.734 1.601c1.303.292 2.397.372 3.517-.121c2.219-.978 3.571-2.142 5.212-3.881C40.505 35.395 42 30.964 42 25.029s-1.6-9.003-4.067-11.009c-2.466-2.006-3.896-2.39-6.878-2.006c-2.982.384-4.606 3.588-7.047 3.588c-2.44 0-5.415-3.159-8.002-3.588c-2.588-.43-4.006 0-6.246 2.006S6 19.15 6 25.03c0 5.878 1.552 10.236 4.593 13.46c1.64 1.739 2.937 3.033 5.155 4.01c1.12.494 2.279.414 3.536.122c1.258-.29 2.258-1.6 4.716-1.6Z"
            clip-rule="evenodd"
          />
          <path
            stroke-linecap="round"
            d="M24.009 15.602C24.794 7.868 28.128 4 34.01 4c.54 1.628.68 3.203.418 4.726c-.123.724-.508 1.756-1.153 3.096M14.229 26c-.277 1.346-.277 2.731 0 4.157c.276 1.425.865 2.525 1.767 3.3"
          />
        </g>
      </svg>
      <span className={cn('text-sm', isSelected ? 'text-primary' : 'text-secondary')}>{name}</span>
    </Link>
  );
};

export default FoodsIconLink;
