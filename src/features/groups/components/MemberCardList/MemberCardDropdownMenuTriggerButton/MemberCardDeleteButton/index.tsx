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
import { IGroup, IUser } from '@/types/definition';

import { useState } from 'react';

import { MemberCardDeleteDialog } from './MemberCardDeleteDialog';

interface IMemberCardDeleteButtonProps {
  /**
   * The function to close the dropdown menu
   */
  onDropdownMenuClose: () => void;
  /**
   * An identifier of a group which a user belongs to.
   */
  groupId: IGroup['id'];
  /**
   * An identifier of a user for which this dropdown menu is.
   */
  userId: IUser['id'];
}

export const MemberCardDeleteButton = ({
  onDropdownMenuClose,
  groupId,
  userId,
}: IMemberCardDeleteButtonProps) => {
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
      <MemberCardDeleteDialog
        onParentClose={onDropdownMenuClose}
        onDialogClose={() => {
          setIsDialogOpen(false);
        }}
        groupId={groupId}
        userId={userId}
      />
    </DialogRoot>
  );
};
