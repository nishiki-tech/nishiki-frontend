'use client';
import { HeaderMenuCircleButton } from '@/components/parts/Header';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui';
import { IUser } from '@/types/definition';

import { useState } from 'react';

import { ProfileHeaderDropdownMenuContent } from './ProfileHeaderDropdownMenuContent';

interface IProfileHeaderDropdownMenuTriggerButtonProps {
  /**
   * The ID of the user to delete.
   */
  userId: IUser['id'];
}

export const ProfileHeaderDropdownMenuTriggerButton = ({
  userId,
}: IProfileHeaderDropdownMenuTriggerButtonProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  return (
    <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
      <DropdownMenuTrigger asChild>
        <HeaderMenuCircleButton />
      </DropdownMenuTrigger>
      <ProfileHeaderDropdownMenuContent
        userId={userId}
        onDropdownMenuClose={() => setIsDropdownMenuOpen(false)}
      />
    </DropdownMenu>
  );
};
