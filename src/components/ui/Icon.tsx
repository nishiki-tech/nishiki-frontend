import { cn } from '@/lib/tailwind/utils';

import { cva, type VariantProps } from 'class-variance-authority';
import { FC, SVGAttributes } from 'react';

/**
 * Style variants for the Icon component.
 */
const iconVariants = cva('', {
  variants: {
    /**
     * Size of the icon, which is based on the Tailwind CSS size utility.
     * If you need more sizes, you can add them by following the Tailwind CSS size utility.
     * If the required size is not available in the default Tailwind CSS, you can add it to the `theme.extend.size` object in the `tailwind.config.ts` file.
     * @see {@link https://tailwindcss.com/docs/size}
     */
    size: {
      2: 'size-2',
      2.5: 'size-2.5',
      3: 'size-3',
      3.5: 'size-3.5',
      4: 'size-4',
      4.5: 'size-4.5',
      5: 'size-5',
      6: 'size-6',
      7: 'size-7',
      8: 'size-8',
      9: 'size-9',
      10: 'size-10',
      11: 'size-11',
      12: 'size-12',
      14: 'size-14',
      16: 'size-16',
      32: 'size-32',
    },
    /**
     * Color of the icon, which is predefined in the `theme.extend.colors` object in the `tailwind.config.ts` file.
     * If you need more colors, you can add them from the `theme.extend.colors` object.
     */
    color: {
      white: 'text-white',
      black: 'text-black',
      primary: 'text-primary',
      danger: 'text-danger',
      gray: 'text-gray',
      'gray-dark': 'text-gray-dark',
    },
  },
});

/**
 * Size of the icon, which is based on the Tailwind CSS "size" utility.
 */
type IconSize = VariantProps<typeof iconVariants>['size'];

/**
 * Color of the icon, which is predefined in the `theme.extend.colors` object in the `tailwind.config.ts` file.
 */
type IconColor = VariantProps<typeof iconVariants>['color'];

interface IIconProps extends VariantProps<typeof iconVariants> {
  /**
   * SVG icon component. It should typically be an SVG component from the `src/assets/images/icons` directory.
   */
  icon: FC<SVGAttributes<SVGElement>>;
  /**
   * Additional class name to apply to the Icon component.
   */
  className?: string;
  /**
   * Size of the icon, which is based on the Tailwind CSS "size" utility.
   */
  size?: IconSize;
  /**
   * Color of the icon, which is predefined in the `theme.extend.colors` object in the `tailwind.config.ts` file.
   */
  color?: IconColor;
}

/**
 * Icon component squares and colors the SVG icon based on the provided props.
 * @param props - IIconProps
 * @returns JSX.Element
 * @example
 * ```tsx
 * <Icon icon={IconName} size={4} color="primary" className='opacity-80' />
 * ```
 */
const Icon = ({ icon, className, size, color }: IIconProps) => {
  const IconComponent = icon;

  return <IconComponent className={cn(iconVariants({ color, size, className }))} />;
};

export { Icon, iconVariants };
