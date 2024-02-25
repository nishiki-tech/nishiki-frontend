'use client';
import { MenuKebabIcon } from '@/assets/images/icons';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Icon,
} from '@/components/ui';

import { useState } from 'react';

import { MemberCardDeleteButton } from './MemberCardDeleteButton';

export const MemberCardDropdownMenuTriggerButton = ({
  userId,
  groupId,
}: {
  userId: string;
  groupId: string;
}) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  return (
    <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12">
          <Icon icon={MenuKebabIcon} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <MemberCardDeleteButton
          onDropdownMenuClose={() => {
            setIsDropdownMenuOpen(false);
          }}
          userId={userId}
          groupId={groupId}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
