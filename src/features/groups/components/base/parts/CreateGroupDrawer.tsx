'use client';

import {
  Button,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  Input,
} from '@/components/ui';

import { FC } from 'react';

interface ICreateGroupDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateClick: () => void;
}

export const CreateGroupDrawer: FC<ICreateGroupDrawerProps> = ({
  isOpen,
  onClose,
  onCreateClick,
}) => {
  return (
    <DrawerRoot open={isOpen}>
      <DrawerContent side="bottom">
        <DrawerHeader>
          <DrawerTitle>Create Group</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Input placeholder="Group Name" />
        </DrawerBody>
        <DrawerFooter>
          <Button variant="cancel" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button size="sm" onClick={onCreateClick}>
            Create
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};
