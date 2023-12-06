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

  // Icon component based on "name" and "isSelected" variable
  let iconName: IconName;
  switch (name) {
    case 'groups':
      iconName = isSelected ? 'home_on' : 'home_off';
      break;
    case 'foods':
      iconName = isSelected ? 'food_on' : 'food_off';
      break;
    default:
      iconName = isSelected ? 'profile_on' : 'profile_off';
  }

  // icon color based on "isSelected" variable
  // const fillStyle = isSelected ? 'primary' : 'secondary';

  // text color based on "isSelected" variable
  const color = isSelected ? 'primary' : 'gray-dark';
  const textColorStyle = `text-${color}`;

  return (
    <Link href={path} className="inline-flex flex-col items-center justify-center px-5">
      <Icon iconName={iconName} className={'mb-1'} color={color} />
      <span className={cn('text-xs', textColorStyle)}>{title}</span>
    </Link>
  );
};
