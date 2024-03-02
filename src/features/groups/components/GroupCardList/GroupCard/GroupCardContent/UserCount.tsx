import { PersonCircleIcon } from '@/assets/images/icons';
import { Icon } from '@/components/ui';

export const UserCount = ({ userCount }: { userCount: number }) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="relative w-16 h-8 flex items-center">
        <Icon icon={PersonCircleIcon} size={6} color="gray" className="absolute left-0" />
        <Icon icon={PersonCircleIcon} size={6} color="gray" className="absolute left-5" />
        <Icon icon={PersonCircleIcon} size={6} color="gray" className="absolute left-10" />
      </div>
      <p>×{userCount}</p>
    </div>
  );
};
