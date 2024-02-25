'use client';

import { DeleteIcon } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';

import { useState } from 'react';

import { MemberCardDeleteDialog } from './MemberCardDleteDialog';

export const MemberCardDeleteButton = ({
  onDropdownMenuClose,
  userId,
  groupId,
}: {
  onDropdownMenuClose: () => void;
  userId: string;
  groupId: string;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={DeleteIcon} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DialogTrigger>
      <MemberCardDeleteDialog
        onParentClose={onDropdownMenuClose}
        onDialogClose={() => {
          setIsDialogOpen(false);
        }}
        userId={userId}
        groupId={groupId}
      />
    </DialogRoot>
  );
};
