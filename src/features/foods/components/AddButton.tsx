import { PlusIcon } from '@/assets/images/icons';
import { Icon } from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

interface IAddButtonProps {
  className?: string;
}

export const AddButton = ({ className }: IAddButtonProps) => {
  return (
    <button
      className={cn(
        'w-14 aspect-square rounded-full',
        'flex items-center justify-center',
        'bg-accent hover:bg-accent-dark shadow-[0_5px_8px_rgba(0,0,0,0.3)]',
        className,
      )}
    >
      <Icon icon={PlusIcon} size={4.5} color="black" />
    </button>
  );
};
