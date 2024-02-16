'use client';
import { MenuKebabIcon } from '@/assets/images/icons';
import { Button, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';

import { FC } from 'react';

import { GroupCardDropdownMenuContent } from './GroupCardDropdownMenuContent';

interface IGroupCardMenuButtonProps {
  handleRenameClick: () => void;
}

export const GroupCardDropdownMenuTriggerButton: FC<IGroupCardMenuButtonProps> = ({
  handleRenameClick,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12">
          <Icon icon={MenuKebabIcon} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
      <GroupCardDropdownMenuContent handleRenameClick={handleRenameClick} />
    </DropdownMenu>
  );
};
