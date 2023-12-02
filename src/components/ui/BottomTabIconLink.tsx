import { mainRouteConfig, MainRouteName } from '@/const/site/mainRouteConfig';
import { cn } from '@/lib/tailwind/utils';

import Link from 'next/link';
import React from 'react';

import { Icon } from '.';
import { IconName } from './Icon';

interface Props {
  name: MainRouteName;
  isSelected: boolean;
}

export const BottomTabIconLink: React.FC<Props> = ({ name, isSelected }) => {
  // Path and link title based on "mainRouteConfig" variable
  const path = mainRouteConfig[name].path;
  const title = mainRouteConfig[name].title;

  // Icon component based on "isSelected" and "name" variable
  const iconName: IconName = isSelected
    ? name === 'groups'
      ? 'fillHomeSmile'
      : name === 'foods'
      ? 'fillFoodApple'
      : 'fillUserProfile'
    : name === 'groups'
    ? 'homeSmile'
    : name === 'foods'
    ? 'foodApple'
    : 'userProfile';

  // icon color based on "isSelected" variable
  const fillStyle = isSelected ? 'primary' : 'secondary';

  // text color based on "isSelected" variable
  const textColorStyle = isSelected ? 'text-primary' : 'text-secondary';

  return (
    <Link href={path} className="inline-flex flex-col items-center justify-center px-5">
      <Icon iconName={iconName} className={'mb-1'} fill={fillStyle} />
      <span className={cn('text-xs', textColorStyle)}>{title}</span>
    </Link>
  );
};
