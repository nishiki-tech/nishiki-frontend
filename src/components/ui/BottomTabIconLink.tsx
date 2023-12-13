import {
  FoodIcon_Off,
  FoodIcon_On,
  HomeIcon_Off,
  HomeIcon_On,
  ProfileIcon_Off,
  ProfileIcon_On,
} from '@/assets/images/icons';
import { mainRouteConfig, MainRouteName } from '@/const/site/mainRouteConfig';
import { cn } from '@/lib/tailwind/utils';

import Link from 'next/link';
import React from 'react';

import { Icon, IconColor, IconSize } from '.';

interface Props {
  name: MainRouteName;
  isSelected: boolean;
}

export const BottomTabIconLink: React.FC<Props> = ({ name, isSelected }) => {
  // Path and link title based on "mainRouteConfig" variable
  const path = mainRouteConfig[name].path;
  const title = mainRouteConfig[name].title;

  const size: IconSize = 6;

  const color: IconColor = isSelected ? 'primary' : 'gray-dark';

  const className = 'mb-1';
  // Icon component based on "name" and "isSelected" variable
  let IconComponent: React.ReactNode;
  switch (name) {
    case 'groups':
      IconComponent = isSelected ? (
        <Icon icon={HomeIcon_On} size={size} color={color} className={className} />
      ) : (
        <Icon icon={HomeIcon_Off} size={size} color={color} className={className} />
      );
      break;
    case 'foods':
      IconComponent = isSelected ? (
        <Icon icon={FoodIcon_On} size={size} color={color} className={className} />
      ) : (
        <Icon icon={FoodIcon_Off} size={size} color={color} className={className} />
      );
      break;
    default:
      IconComponent = isSelected ? (
        <Icon icon={ProfileIcon_On} size={size} color={color} className={className} />
      ) : (
        <Icon icon={ProfileIcon_Off} size={size} color={color} className={className} />
      );
  }

  // text color based on "isSelected" variable
  const textColorStyle = isSelected ? `text-primary` : 'text-gray-dark';

  return (
    <Link href={path} className="inline-flex flex-col items-center justify-center px-5">
      {IconComponent}
      <span className={cn('text-xs', textColorStyle)}>{title}</span>
    </Link>
  );
};
