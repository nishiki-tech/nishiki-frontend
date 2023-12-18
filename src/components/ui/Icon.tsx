import { cn } from '@/lib/tailwind/utils';

import { cva, type VariantProps } from 'class-variance-authority';
import { FC, SVGAttributes } from 'react';

const iconVariants = cva('', {
  variants: {
    // reference for icon size: https://tailwindcss.com/docs/width
    // Since some of the icons in the design are not following 4px grid, and to be fixed in the future,
    // If the size in the design is not in the list, you can assign the closest size from this list.
    size: {
      2: 'w-2 h-2',
      3: 'w-3 h-3',
      3.5: 'w-3.5 h-3.5',
      4: 'w-4 h-4',
      5: 'w-5 h-5',
      6: 'w-6 h-6',
      7: 'w-7 h-7',
      8: 'w-8 h-8',
      9: 'w-9 h-9',
      10: 'w-10 h-10',
      11: 'w-11 h-11',
      12: 'w-12 h-12',
      13: 'w-13 h-13',
      14: 'w-14 h-14',
      15: 'w-15 h-15',
      16: 'w-16 h-16',
    },
    color: {
      black: 'text-black',
      primary: 'text-primary',
      danger: 'text-danger',
      gray: 'text-gray',
      'gray-dark': 'text-gray-dark',
    },
  },
  defaultVariants: {
    size: 3,
    color: 'black',
  },
});

interface IIconProps extends VariantProps<typeof iconVariants> {
  icon: FC<SVGAttributes<SVGElement>>;
  className?: string;
}

const Icon: FC<IIconProps> = ({ icon, className, size, color }) => {
  const IconComponent = icon;

  return <IconComponent className={cn(iconVariants({ color, size, className }))} />;
};

export { Icon, iconVariants };
