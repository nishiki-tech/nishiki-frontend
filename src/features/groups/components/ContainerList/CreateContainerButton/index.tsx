'use client';

import { PlusIcon } from '@/assets/images/icons';
import { Button, DrawerRoot, DrawerTrigger, Icon } from '@/components/ui';
import { IGroup } from '@/types/definition';

import { useState } from 'react';

import { CreateContainerDrawerContent } from './CreateContainerBottomDrawerContent';

export const CreateContainerButton = ({ groupId }: { groupId: IGroup['id'] }) => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Function to change the state of CreateContainerDrawerContent to close(=false)
   */
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
      <CreateContainerDrawerContent isOpen={isOpen} onClose={onClose} groupId={groupId} />
    </DrawerRoot>
  );
};
