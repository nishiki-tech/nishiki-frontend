import {
  ArrowLeftIcon,
  BagIcon,
  CalendarIcon,
  ContainerIcon,
  CrossIcon,
  DeleteIcon,
  FilterIcon,
  FoodIcon_Off,
  FoodIcon_On,
  HomeIcon_Off,
  HomeIcon_On,
  LinkIcon,
  LogoutIcon,
  MenuCircleIcon,
  MenuMeatballIcon,
  PenIcon,
  PlusIcon,
  ProfileIcon_Off,
  ProfileIcon_On,
  SearchIcon,
  TriangleDownIcon,
  TriangleRightIcon,
} from '@/assets/images/icons';
import { cn } from '@/lib/tailwind/utils';

import React, { FC } from 'react';

const icons = {
  arrowLeft: ArrowLeftIcon,
  bag: BagIcon,
  calendar: CalendarIcon,
  container: ContainerIcon,
  close: CrossIcon,
  delete: DeleteIcon,
  filter: FilterIcon,
  link: LinkIcon,
  logout: LogoutIcon,
  menuCircle: MenuCircleIcon,
  menuMeatball: MenuMeatballIcon,
  food_off: FoodIcon_Off,
  home_off: HomeIcon_Off,
  profile_off: ProfileIcon_Off,
  food_on: FoodIcon_On,
  home_on: HomeIcon_On,
  profile_on: ProfileIcon_On,
  pen: PenIcon,
  plus: PlusIcon,
  search: SearchIcon,
  triangleDown: TriangleDownIcon,
  triangleRight: TriangleRightIcon,
} as const;

const iconSize = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
} as const;

export type IconName = keyof typeof icons;

export type IconSize = keyof typeof iconSize;

type IconProps = {
  iconName: IconName;
  color?: string;
  size?: IconSize;
  className?: string;
};

export const Icon: FC<IconProps> = ({ iconName, color, size = 'md', className }) => {
  const IconComponent = icons[iconName];

  // stroke style doesn't work if you set it stroke-colorname,
  // but it works if you set it text-colorname
  // and it work also without fill style
  const colorStyle = 'text-' + color;
  const sizeStyle = iconSize[size];

  return <IconComponent className={cn(colorStyle, sizeStyle, className)} />;
};
