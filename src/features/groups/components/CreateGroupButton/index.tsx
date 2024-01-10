'use client';

import { PlusIcon } from '@/assets/images/icons';
import { Button, DrawerRoot, DrawerTrigger, Icon } from '@/components/ui';

import { FC, useState } from 'react';

import { CreateGroupDrawerContent } from './CreateGroupDrawerContent';

interface ICreateGroupButtonProps {
  handleCreateGroup: (groupName: string) => Promise<void>;
}

export const CreateGroupButton: FC<ICreateGroupButtonProps> = ({ handleCreateGroup }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DrawerRoot open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icon icon={PlusIcon} size={4} />
        </Button>
      </DrawerTrigger>
      <CreateGroupDrawerContent handleCreateGroup={handleCreateGroup} />
    </DrawerRoot>
  );
};
