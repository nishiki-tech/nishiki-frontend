import { mainRouteConfig, MainRouteName } from '@/const/site/mainRouteConfig';
import { cn } from '@/lib/tailwind/utils';

import Link from 'next/link';
import React from 'react';

import {
  FoodAppleIcon,
  FoodAppleIconOnSelected,
  HomeSmileIcon,
  HomeSmileIconOnSelected,
  UserProfileOutlineIcon,
  UserProfileOutlineIconOnSelected,
} from '../icon';

interface Props {
  name: MainRouteName;
  isSelected: boolean;
}

export const BottomTabIconLink: React.FC<Props> = ({ name, isSelected }) => {
  // Path and link title based on "mainRouteConfig" variable
  const path = mainRouteConfig[name].path;
  const title = mainRouteConfig[name].title;
  // text color based on "isSelected" variable
  const textColorStyle = isSelected ? 'text-primary' : 'text-secondary';

  // Icon component based on "isSelected" variable
  const IconComponent = isSelected ? (
    name === 'groups' ? (
      <HomeSmileIconOnSelected />
    ) : name === 'foods' ? (
      <FoodAppleIconOnSelected />
    ) : (
      <UserProfileOutlineIconOnSelected />
    )
  ) : name === 'groups' ? (
    <HomeSmileIcon />
  ) : name === 'foods' ? (
    <FoodAppleIcon />
  ) : (
    <UserProfileOutlineIcon />
  );

  return (
    <Link href={path} className="inline-flex flex-col items-center justify-center px-5">
      {IconComponent}
      <span className={cn('text-xs', textColorStyle)}>{title}</span>
    </Link>
  );
};
