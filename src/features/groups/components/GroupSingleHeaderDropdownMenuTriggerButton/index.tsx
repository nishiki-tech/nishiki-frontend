'use client';
import { IconMenuCircle } from '@/assets/images/icons';
import { Button, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';
import { IGroup } from '@/types/definition';

import { useState } from 'react';

import { GroupSingleHeaderDropdownMenuContent } from './GroupSingleHeaderDropdownMenuContent';

export const GroupSingleHeaderDropdownMenuTriggerButton = ({
  groupId,
}: {
  groupId: IGroup['id'];
}) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  return (
    <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="h-full px-4 flex items-center">
          <Icon icon={IconMenuCircle} size={6} color="black" />
        </Button>
      </DropdownMenuTrigger>
      <GroupSingleHeaderDropdownMenuContent
        groupId={groupId}
        onDropdownMenuClose={() => setIsDropdownMenuOpen(false)}
      />
    </DropdownMenu>
  );
};
