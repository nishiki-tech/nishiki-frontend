import { ContainerIcon } from '@/assets/images/icons';
import { Icon, iconVariants } from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const iconWithCircleVariants = cva('rounded-full bg-accent flex justify-center items-center', {
  variants: {
    circleSize: {
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
  },
  defaultVariants: {
    circleSize: 8,
  },
});

interface IContainerIconWithCircleProps extends VariantProps<typeof iconWithCircleVariants> {
  iconSize?: VariantProps<typeof iconVariants>['size'];
  className?: string;
}

export const ContainerIconWithCircle: FC<IContainerIconWithCircleProps> = ({
  circleSize,
  iconSize = 5,
  className,
}) => {
  return (
    <div
      className={cn(
        iconWithCircleVariants({
          circleSize,
          className,
        }),
      )}
    >
      <Icon icon={ContainerIcon} size={iconSize} color="black" />
    </div>
  );
};
