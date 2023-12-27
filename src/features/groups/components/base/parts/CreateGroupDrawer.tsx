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

import { Dispatch, FC, SetStateAction } from 'react';

interface ICreateGroupDrawerProps {
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
  onCreateClick: () => void;
}

export const CreateGroupDrawer: FC<ICreateGroupDrawerProps> = ({
  isOpen,
  onOpenChange,
  onClose,
  onCreateClick,
}) => {
  return (
    <DrawerRoot open={isOpen} onOpenChange={onOpenChange}>
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
