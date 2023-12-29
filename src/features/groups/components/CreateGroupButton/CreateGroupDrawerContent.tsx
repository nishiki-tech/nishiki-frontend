import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Input,
} from '@/components/ui';

import React, { FC } from 'react';

interface ICreateGroupDrawerContentProps {
  handleCreateGroup: () => void;
}

export const CreateGroupDrawerContent: FC<ICreateGroupDrawerContentProps> = ({
  handleCreateGroup,
}) => {
  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Create Group</DrawerTitle>
      </DrawerHeader>
      <DrawerBody>
        <Input placeholder="Group Name" />
      </DrawerBody>
      <DrawerFooter>
        <DrawerClose>
          <Button variant="cancel" size="sm">
            Cancel
          </Button>
        </DrawerClose>
        <Button size="sm" onClick={handleCreateGroup}>
          Create
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};
