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

import { FC } from 'react';

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
        <DrawerClose asChild>
          <Button variant="cancel" size="md">
            Cancel
          </Button>
        </DrawerClose>
        <Button variant="primary" size="md" onClick={handleCreateGroup}>
          Create
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};
