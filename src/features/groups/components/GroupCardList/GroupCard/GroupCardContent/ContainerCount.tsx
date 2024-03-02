import { ContainerIcon } from '@/assets/images/icons';
import { Icon } from '@/components/ui';

export const ContainerCount = ({ containerCount }: { containerCount: number }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-accent flex justify-center items-center">
        <Icon icon={ContainerIcon} size={5} color="black" />
      </div>
      <span>{containerCount}</span>
    </div>
  );
};
