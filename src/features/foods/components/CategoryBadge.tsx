import { CrossIcon } from '@/assets/images/icons';
import { Icon } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/tailwind/utils';

interface ICategoryBadgeProps {
  emoji: string;
  text: string;
  className?: string;
  onCrossClick?: () => void;
}

const CategoryBadge = ({ emoji, text, className, onCrossClick, ...props }: ICategoryBadgeProps) => {
  return (
    <Badge variant="lightest" className={cn('pl-1 pr-0 gap-0', className)} {...props}>
      <div className="bg-white w-4 h-4 rounded-full p-[3px] mr-1 flex items-center justify-center text-xs select-none">
        {emoji}
      </div>
      {text}
      <button className="h-full w-6 flex items-center relative" onClick={onCrossClick}>
        <Icon icon={CrossIcon} size={2} className="absolute right-2" />
      </button>
    </Badge>
  );
};

export { CategoryBadge };
