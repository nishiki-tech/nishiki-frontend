'use client';
import { IconDelete } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';
import { DeleteGroupDialogContent } from '@/features/groups/components/DeleteGroupDialogContent';
import { IGroup } from '@/types/definition';

import { useState } from 'react';

interface IGroupCardDropdownMenuDeleteButtonProps {
  /**
   * The ID of the group to delete.
   */
  groupId: IGroup['id'];

  /**
   * The function to close the dropdown menu.
   */
  onDropdownMenuClose: () => void;
}

export const DeleteGroupDialogTriggerButton = ({
  groupId,
  onDropdownMenuClose,
}: IGroupCardDropdownMenuDeleteButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={IconDelete} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DialogTrigger>
      <DeleteGroupDialogContent
        groupId={groupId}
        onParentClose={onDropdownMenuClose}
        onDialogClose={() => setIsDialogOpen(false)}
      />
    </DialogRoot>
  );
};
