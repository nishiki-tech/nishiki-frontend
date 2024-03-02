'use client';
import { IconMenuKebab } from '@/assets/images/icons';
import { Button, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';
import { IGroup } from '@/types/definition';

import { useState } from 'react';

import { GroupCardDropdownMenuContent } from './GroupCardDropdownMenuContent';

interface IGroupCardMenuButtonProps {
  /**
   * The ID of the group to delete.
   */
  groupId: IGroup['id'];
  /**
   * Function to handle the rename button click.
   */
  handleRenameClick: () => void;
}

export const GroupCardDropdownMenuTriggerButton = ({
  groupId,
  handleRenameClick,
}: IGroupCardMenuButtonProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  return (
    <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12">
          <Icon icon={IconMenuKebab} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
      <GroupCardDropdownMenuContent
        groupId={groupId}
        handleRenameClick={handleRenameClick}
        onDropdownMenuClose={() => setIsDropdownMenuOpen(false)}
      />
    </DropdownMenu>
  );
};
