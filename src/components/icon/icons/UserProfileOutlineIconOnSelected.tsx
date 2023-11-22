import { iconSizeConfig } from '@/components/icon/config';
import { cn } from '@/lib/tailwind/utils';

import React from 'react';

import { IconProps } from '../type';

export const UserProfileOutlineIconOnSelected: React.FC<IconProps> = ({
  size = 'md',
  className,
}) => {
  const iconSize = iconSizeConfig[size];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(iconSize, className)}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 18.0002C17.4145 18.0002 18.771 17.4383 19.7712 16.4381C20.7714 15.4379 21.3333 14.0813 21.3333 12.6668C21.3333 11.2523 20.7714 9.89579 19.7712 8.89559C18.771 7.8954 17.4145 7.3335 16 7.3335C14.5855 7.3335 13.229 7.8954 12.2288 8.89559C11.2286 9.89579 10.6667 11.2523 10.6667 12.6668C10.6667 14.0813 11.2286 15.4379 12.2288 16.4381C13.229 17.4383 14.5855 18.0002 16 18.0002Z"
        className="fill-primary"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.3333 16.0001C29.3333 23.3641 23.364 29.3334 16 29.3334C8.636 29.3334 2.66667 23.3641 2.66667 16.0001C2.66667 8.63608 8.636 2.66675 16 2.66675C23.364 2.66675 29.3333 8.63608 29.3333 16.0001ZM24.6567 24.3107C24.55 23.0627 23.6027 22.0214 22.33 21.8454C17.6527 21.1981 14.3833 21.1361 9.68 21.8234C8.4 22.0101 7.45667 23.0607 7.34467 24.3121C5.19488 22.0795 3.99576 19.0995 4 16.0001C4 9.37275 9.37267 4.00008 16 4.00008C22.6273 4.00008 28 9.37275 28 16.0001C28.0043 19.0988 26.8056 22.0782 24.6567 24.3107Z"
        className="fill-primary"
      />
    </svg>
  );
};
