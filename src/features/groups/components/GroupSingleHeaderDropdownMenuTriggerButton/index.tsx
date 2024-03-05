'use client';
import { IconMenuCircle } from '@/assets/images/icons';
import { Button, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';

import { GroupSingleHeaderDropdownMenuContent } from './GroupSingleHeaderDropdownMenuContent';

export const GroupSingleHeaderDropdownMenuTriggerButton = () => {
  const testClicked = () => {
    console.log('clicked');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-full px-4 flex items-center" onClick={testClicked}>
          <Icon icon={IconMenuCircle} size={6} color="black" />
        </Button>
      </DropdownMenuTrigger>
      <GroupSingleHeaderDropdownMenuContent />
    </DropdownMenu>
  );
};
