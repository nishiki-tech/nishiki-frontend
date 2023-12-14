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

import { Icon } from '.';

interface Props {
  name: MainRouteName;
  isSelected: boolean;
}

export const BottomTabIconLink: React.FC<Props> = ({ name, isSelected }) => {
  // Path and link title based on "mainRouteConfig" variable
  const path = mainRouteConfig[name].path;
  const title = mainRouteConfig[name].title;

  const size = 6;

  const color = isSelected ? 'primary' : 'gray-dark';

  const className = 'mb-1';

  type BottomTabIconMap = {
    [key: string]: {
      [key: string]: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    };
  };
  const map: BottomTabIconMap = {
    groups: { on: HomeIcon_On, off: HomeIcon_Off },
    foods: { on: FoodIcon_On, off: FoodIcon_Off },
    profile: { on: ProfileIcon_On, off: ProfileIcon_Off },
  };
  // Icon component based on "name" and "isSelected" variable
  const IconComponent: React.ReactNode = (
    <Icon
      icon={map[name][isSelected ? 'on' : 'off']}
      size={size}
      color={color}
      className={className}
    />
  );

  // text color based on "isSelected" variable
  const textColorStyle = isSelected ? `text-primary` : 'text-gray-dark';

  return (
    <Link href={path} className="inline-flex flex-col items-center justify-center px-5">
      {IconComponent}
      <span className={cn('text-xs', textColorStyle)}>{title}</span>
    </Link>
  );
};
