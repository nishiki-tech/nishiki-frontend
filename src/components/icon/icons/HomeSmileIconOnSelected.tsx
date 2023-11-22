import { iconSizeConfig } from '@/components/icon/config';
import { cn } from '@/lib/tailwind/utils';

import React from 'react';

import { IconProps } from '../type';

export const HomeSmileIconOnSelected: React.FC<IconProps> = ({ size = 'md', className }) => {
  const iconSize = iconSizeConfig[size];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={cn(iconSize, className)} viewBox="0 0 32 32">
      <path
        d="M14.7304 5.25813L14.7329 5.25604C15.0892 4.96097 15.5374 4.79951 16 4.79951C16.4626 4.79951 16.9108 4.96097 17.2671 5.25605L17.2696 5.25809L25.0909 11.6821L25.0914 11.6824C25.5772 12.0809 25.8667 12.6922 25.8667 13.3439V25.0799C25.8667 26.2713 24.9319 27.1999 23.8227 27.1999H8.17734C7.06814 27.1999 6.13334 26.2713 6.13334 25.0799V13.3439C6.13334 12.6922 6.42286 12.0807 6.90772 11.6821C6.90776 11.6821 6.90781 11.6821 6.90785 11.682C6.90788 11.682 6.90791 11.682 6.90793 11.682L14.7304 5.25813Z"
        className="stroke-primary fill-primary"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2354 21.3331C13.302 22.1237 14.6008 22.588 16.0001 22.588C17.3993 22.588 18.6981 22.1237 19.7648 21.3331M12.8628 15.686V15.0586V15.686ZM19.1373 15.686V15.0586V15.686Z"
        className="fill-primary"
      />
      <path
        d="M12.2354 21.3331C13.302 22.1237 14.6008 22.588 16.0001 22.588C17.3993 22.588 18.6981 22.1237 19.7648 21.3331M12.8628 15.686V15.0586M19.1373 15.686V15.0586"
        className="stroke-popover"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
