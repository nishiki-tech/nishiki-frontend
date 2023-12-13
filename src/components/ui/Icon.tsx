import { cn } from '@/lib/tailwind/utils';

import React from 'react';

// reference for icon size: https://tailwindcss.com/docs/width
// Since some of the icons in the design are not following 4px grid, and to be fixed in the future,
// If the size in the design is not in the list, you can assign the closest size from this list.
const iconSize = {
  3: 'w-3',
  3.5: 'w-3.5',
  4: 'w-4',
  5: 'w-5',
  6: 'w-6',
  7: 'w-7',
  8: 'w-8',
  9: 'w-9',
  10: 'w-10',
  11: 'w-11',
  12: 'w-12',
  13: 'w-13',
  14: 'w-14',
  15: 'w-15',
  16: 'w-16',
} as const;

// This might not be the best way in terms of SOLID principle(Open-close principle)
// ,but since text-`${variable}` is not allowed in tailwind
const iconColor = {
  black: 'text-black',
  primary: 'text-primary',
  danger: 'text-danger',
  'gray-dark': 'text-gray-dark',
};

export type IconSize = keyof typeof iconSize;

export type IconColor = keyof typeof iconColor;

type Props = {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  color?: IconColor;
  size?: IconSize;
  className?: string;
};

export const Icon: React.FC<Props> = ({ icon, color = 'black', size = 3, className }) => {
  const IconComponent = icon;
  const colorStyle = iconColor[color];
  const sizeStyle = iconSize[size];

  // adding "sizeStyle" as last argument to make sure it overrides any sizing written in "className"
  return <IconComponent className={cn(colorStyle, className, sizeStyle, 'aspect-square')} />;
};
