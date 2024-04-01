'use client';
import { IconMenuKebab } from '@/assets/images/icons';
import { Button, DialogRoot, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';
import { DeleteGroupDialogContent } from '@/features/groups/components/DeleteGroupDialogContent';
import { IGroup } from '@/types/definition';

import { useState } from 'react';

import { GroupCardDropdownMenuContent } from './GroupCardDropdownMenuContent';

interface IGroupCardMenuButtonProps {
  /**
   * The ID of the group to be deleted.
   */
  groupId: IGroup['id'];
  /**
   * Function to handle the rename button click.
   */
  handleRenameClick: () => void;
}

export const GroupCardDropdownMenu = ({
  groupId,
  handleRenameClick,
}: IGroupCardMenuButtonProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isDeleteGroupDialogOpen, setIsDeleteGroupDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDropdownMenuOpen(false);
    setIsDeleteGroupDialogOpen(true);
  };
  return (
    <>
      <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-12">
            <Icon icon={IconMenuKebab} size={4.5} />
          </Button>
        </DropdownMenuTrigger>
        <GroupCardDropdownMenuContent
          handleRenameClick={handleRenameClick}
          handleDeleteClick={handleDeleteClick}
        />
      </DropdownMenu>
      <DialogRoot open={isDeleteGroupDialogOpen} onOpenChange={setIsDeleteGroupDialogOpen}>
        <DeleteGroupDialogContent
          groupId={groupId}
          onParentClose={() => setIsDropdownMenuOpen(false)}
          onDialogClose={() => setIsDeleteGroupDialogOpen(false)}
        />
      </DialogRoot>
    </>
  );
};
