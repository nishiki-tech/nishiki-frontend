import {
  BagIcon,
  CalendarIcon,
  ChevronBackIcon,
  CloseIcon,
  ContainerIcon,
  DeleteTrashIcon,
  EditPencilIcon,
  FillFoodAppleIcon,
  FillHomeSmileIcon,
  FillUserProfileIcon,
  FilterIcon,
  FoodAppleIcon,
  HomeSmileIcon,
  LinkIcon,
  LogoutIcon,
  MeatballIcon,
  MenuDotsIcon,
  PlusIcon,
  SearchIcon,
  TriangleDownIcon,
  TriangleRightIcon,
  UserProfileIcon,
} from '@/assets/images/icons';
import { cn } from '@/lib/tailwind/utils';

import React from 'react';

const icons = {
  bag: BagIcon,
  calendar: CalendarIcon,
  chevronBack: ChevronBackIcon,
  close: CloseIcon,
  container: ContainerIcon,
  deleteTrash: DeleteTrashIcon,
  editPencil: EditPencilIcon,
  fillFoodApple: FillFoodAppleIcon,
  fillHomeSmile: FillHomeSmileIcon,
  fillUserProfile: FillUserProfileIcon,
  filter: FilterIcon,
  foodApple: FoodAppleIcon,
  homeSmile: HomeSmileIcon,
  link: LinkIcon,
  logout: LogoutIcon,
  meatball: MeatballIcon,
  menuDots: MenuDotsIcon,
  plus: PlusIcon,
  search: SearchIcon,
  triangleDown: TriangleDownIcon,
  triangleRight: TriangleRightIcon,
  userProfile: UserProfileIcon,
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
