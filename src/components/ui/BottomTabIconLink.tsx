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
      ? 'home_on'
      : name === 'foods'
      ? 'food_on'
      : 'profile_on'
    : name === 'groups'
    ? 'home_off'
    : name === 'foods'
    ? 'food_off'
    : 'profile_off';

  // icon color based on "isSelected" variable
  // const fillStyle = isSelected ? 'primary' : 'secondary';

  // text color based on "isSelected" variable
  const color = isSelected ? 'primary' : 'secondary';
  const textColorStyle = `text-${color}`;

  return (
    <Link href={path} className="inline-flex flex-col items-center justify-center px-5">
      <Icon iconName={iconName} className={'mb-1'} color={color} />
      <span className={cn('text-xs', textColorStyle)}>{title}</span>
    </Link>
  );
};