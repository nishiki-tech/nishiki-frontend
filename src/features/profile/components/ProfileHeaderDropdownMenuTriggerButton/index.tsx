'use client';
import { HeaderMenuCircleButton } from '@/components/parts/Header';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui';

import { useState } from 'react';

import { ProfileHeaderDropdownMenuContent } from './ProfileHeaderDropdownMenuContent';

export const ProfileHeaderDropdownMenuTriggerButton = () => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  return (
    <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
      <DropdownMenuTrigger asChild>
        <HeaderMenuCircleButton />
      </DropdownMenuTrigger>
      <ProfileHeaderDropdownMenuContent onDropdownMenuClose={() => setIsDropdownMenuOpen(false)} />
    </DropdownMenu>
  );
};
