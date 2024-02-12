'use client';
import { MenuKebabIcon } from '@/assets/images/icons';
import { Button, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';

import { FC } from 'react';

interface IGroupCardMenuButtonProps {
  handleRenameClick: () => void;
}

export const GroupCardDropdownMenuTriggerButton: FC<IGroupCardMenuButtonProps> = ({}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12">
          <Icon icon={MenuKebabIcon} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
      {/* <GroupCardDropdownMenuContent handleRenameClick={handleRenameClick} /> */}
    </DropdownMenu>
  );
};
