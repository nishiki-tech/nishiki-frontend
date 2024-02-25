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

export const MemberCardDropdownMenuTriggerButton = ({}) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpne] = useState(false);

  return (
    <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpne}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12">
          <Icon icon={MenuKebabIcon} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <MemberCardDeleteButton open={isDropdownMenuOpen} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
