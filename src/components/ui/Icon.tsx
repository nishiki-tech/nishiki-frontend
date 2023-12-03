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

import React from 'react';

const icons = {
  arrowLeft: ArrowLeftIcon,
  bag: BagIcon,
  calendar: CalendarIcon,
  container: ContainerIcon,
  close: CrossIcon,
  deleteTrash: DeleteIcon,
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
};

const iconSizeConfig = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
} as const;

export type IconSize = keyof typeof iconSizeConfig;

export type IconName = keyof typeof icons;

type IconProps = {
  iconName: IconName;
  stroke?: string;
  fill?: string;
  className?: string;
  size?: IconSize;
};

export const Icon: React.FC<IconProps> = ({
  iconName,
  className,
  stroke = 'none',
  fill = 'none',
  size = 'md',
}) => {
  const IconComponent = icons[iconName];
  const strokeStyle = 'stroke-' + stroke;
  const fillStyle = 'fill-' + fill;
  const iconSize = iconSizeConfig[size];

  return <IconComponent className={cn(strokeStyle, fillStyle, iconSize, className)} />;
};
