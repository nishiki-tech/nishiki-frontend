import { cn } from '@/lib/tailwind/utils';

import { CircleEllipsis } from 'lucide-react';
import React from 'react';

import { Button } from '../..';

interface Props {
  className?: string;
  onClick?: () => void;
}

export const MeatballIconButton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} className="hover:bg-popover">
      <CircleEllipsis className={cn('stroke-popover-foreground fill-none', className)} />
    </Button>
  );
};
