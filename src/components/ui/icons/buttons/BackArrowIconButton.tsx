import { cn } from '@/lib/tailwind/utils';

import { ChevronLeft } from 'lucide-react';
import React from 'react';

import { Button } from '../..';

interface Props {
  className?: string;
  onClick?: () => void;
}

const BackArrowIconButton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} className="hover:bg-popover">
      <ChevronLeft className={cn('stroke-popover-foreground fill-none', className)} />
    </Button>
  );
};

export default BackArrowIconButton;
