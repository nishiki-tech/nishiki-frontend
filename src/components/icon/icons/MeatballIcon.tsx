import { iconSizeConfig } from '@/components/icon/iconSizeConfig';
import { cn } from '@/lib/tailwind/utils';

import React from 'react';

import { IconProps } from '../type';

export const MeatballIcon: React.FC<IconProps> = ({ size = 'md', className }) => {
  const iconSize = iconSizeConfig[size];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('fill-none', iconSize, className)}
      viewBox="0 0 32 32"
    >
      <path
        d="M16 28.1905C22.7327 28.1905 28.1905 22.7326 28.1905 16C28.1905 9.26737 22.7327 3.80951 16 3.80951C9.26743 3.80951 3.80957 9.26737 3.80957 16C3.80957 22.7326 9.26743 28.1905 16 28.1905Z"
        className="stroke-popover-foreground"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0001 17.5238C16.762 17.5238 17.5239 16.7619 17.5239 16C17.5239 15.2381 16.762 14.4762 16.0001 14.4762C15.2382 14.4762 14.4778 15.2381 14.4778 16C14.4778 16.7619 15.2382 17.5238 16.0001 17.5238ZM9.90485 17.5238C10.6668 17.5238 11.4287 16.7619 11.4287 16C11.4287 15.2381 10.6668 14.4762 9.90485 14.4762C9.14295 14.4762 8.38257 15.2381 8.38257 16C8.38257 16.7619 9.14295 17.5238 9.90485 17.5238ZM22.0953 17.5238C22.8572 17.5238 23.6191 16.7619 23.6191 16C23.6191 15.2381 22.8572 14.4762 22.0953 14.4762C21.3334 14.4762 20.573 15.2381 20.573 16C20.573 16.7619 21.3334 17.5238 22.0953 17.5238Z"
        className="fill-popover-foreground"
      />
    </svg>
  );
};
