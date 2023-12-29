import { PersonCircleIcon } from '@/assets/images/icons';
import { Icon } from '@/components/ui';

export const UserCount = ({ userCount }: { userCount: number }) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="relative w-16 h-full mx-1">
        <Icon icon={PersonCircleIcon} size={7} color="gray" className="absolute left-0 top-1" />
        <Icon icon={PersonCircleIcon} size={7} color="gray" className="absolute left-5 top-1" />
        <Icon icon={PersonCircleIcon} size={7} color="gray" className="absolute left-10 top-1" />
      </div>
      <p>×{userCount}</p>
    </div>
  );
};
