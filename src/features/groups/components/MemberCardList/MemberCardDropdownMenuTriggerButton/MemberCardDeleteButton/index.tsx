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

import { MemberCardDeleteDialog } from './MemberCardDleteDialog';

export const MemberCardDeleteButton = () => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={DeleteIcon} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DialogTrigger>
      <MemberCardDeleteDialog />
    </DialogRoot>
  );
};
