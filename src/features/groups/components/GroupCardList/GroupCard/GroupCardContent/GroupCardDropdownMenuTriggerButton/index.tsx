'use client';
import { MenuKebabIcon } from '@/assets/images/icons';
import { Button, DialogRoot, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';

import { FC } from 'react';

import { DeleteGroupConfirmDialogContent } from './DeleteGroupConfirmDialogContent';
import { GroupCardDropdownMenuContent } from './GroupCardDropdownMenuContent';

interface IGroupCardMenuButtonProps {
  handleRenameClick: () => void;
}

export const GroupCardDropdownMenuTriggerButton: FC<IGroupCardMenuButtonProps> = ({
  handleRenameClick,
}) => {
  return (
    // Wrapping dialog menu with DialogRoot. Trigger is in GroupCarDropdownMenuContent
    <DialogRoot>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-12">
            <Icon icon={MenuKebabIcon} size={4.5} />
          </Button>
        </DropdownMenuTrigger>
        <GroupCardDropdownMenuContent handleRenameClick={handleRenameClick} />
      </DropdownMenu>
      <DeleteGroupConfirmDialogContent />
    </DialogRoot>
  );
};
