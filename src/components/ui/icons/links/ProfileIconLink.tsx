import { mainRouteConfig, MainRouteName } from '@/const/site/mainRouteConfig';
import { cn } from '@/lib/tailwind/utils';

import Link from 'next/link';
import React from 'react';

interface Props {
  name: MainRouteName;
  isSelected: boolean;
  className?: string;
}

const name = 'profile';

const ProfileIconLink: React.FC<Props> = ({ isSelected, className }) => {
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
        className={cn(isSelected ? 'fill-primary' : 'fill-secondary', className)}
      >
        <g fill-rule="evenodd" clip-rule="evenodd">
          <path d="M24 27a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" />
          <path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20ZM33.63 39.21A17.915 17.915 0 0 1 24 42a17.916 17.916 0 0 1-9.832-2.92c-.24-.3-.483-.61-.73-.93A2.144 2.144 0 0 1 13 36.845c0-1.077.774-1.98 1.809-2.131c6.845-1 11.558-.914 18.412.035A2.077 2.077 0 0 1 35 36.818c0 .48-.165.946-.463 1.31c-.307.374-.61.735-.907 1.082Zm3.355-2.744c-.16-1.872-1.581-3.434-3.49-3.698c-7.016-.971-11.92-1.064-18.975-.033c-1.92.28-3.335 1.856-3.503 3.733A17.94 17.94 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.015 12.466Z" />
        </g>
      </svg>
      <span className={cn('text-sm', isSelected ? 'text-primary' : 'text-secondary')}>{name}</span>
    </Link>
  );
};

export default ProfileIconLink;
