'use client';

import { PlusIcon } from '@/assets/images/icons';
import { Button, DrawerRoot, DrawerTrigger, Icon } from '@/components/ui';

import { useState } from 'react';

import { CreateGroupDrawerContent } from './CreateGroupDrawerContent';

export const CreateGroupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <DrawerRoot open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icon icon={PlusIcon} size={4.5} />
        </Button>
      </DrawerTrigger>
      <CreateGroupDrawerContent isOpen={isOpen} onClose={onClose} />
    </DrawerRoot>
  );
};
