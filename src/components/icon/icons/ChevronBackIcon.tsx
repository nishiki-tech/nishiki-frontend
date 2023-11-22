import { iconSizeConfig } from '@/components/icon/config';
import { cn } from '@/lib/tailwind/utils';

import React from 'react';

import { IconProps } from '../type';

export const ChevronBackIcon: React.FC<IconProps> = ({ size = 'md', className }) => {
  const iconSize = iconSizeConfig[size];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('fill-none', iconSize, className)}
      viewBox="0 0 24 24"
    >
      <path
        d="M15.375 5.25L8.625 12L15.375 18.75"
        className="stroke-popover-foreground"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
