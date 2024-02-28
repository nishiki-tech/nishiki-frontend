'use client';
import { IconMenuKebab } from '@/assets/images/icons';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Icon,
} from '@/components/ui';
import { IGroup, IUser } from '@/types/definition';

import { useState } from 'react';

import { MemberCardDeleteButton } from './MemberCardDeleteButton';

interface IMemberCardDropdownMenuTriggerButton {
  /**
   * An identifier of a group which a user belongs to.
   */
  groupId: IGroup['id'];
  /**
   * An identifier of a user for which this dropdown menu is.
   */
  userId: IUser['id'];
}

export const MemberCardDropdownMenuTriggerButton = ({
  groupId,
  userId,
}: IMemberCardDropdownMenuTriggerButton) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  return (
    <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12">
          <Icon icon={IconMenuKebab} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <MemberCardDeleteButton
          onDropdownMenuClose={() => {
            setIsDropdownMenuOpen(false);
          }}
          groupId={groupId}
          userId={userId}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
