'use client';
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

import { FC, useState } from 'react';

import { createGroupAction } from './action';

// interface ICreateGroupDrawerContentProps {
//   handleCreateGroup: (groupName: string) => Promise<void>;
// }

export const CreateGroupDrawerContent: FC = () => {
  const [groupName, setGroupName] = useState('');
  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Create Group</DrawerTitle>
      </DrawerHeader>
      <form onSubmit={() => createGroupAction({ groupName })}>
        <DrawerBody>
          <Input
            placeholder="Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="cancel" size="md">
              Cancel
            </Button>
          </DrawerClose>
          <Button type="submit" variant="primary" size="md">
            Create
          </Button>
        </DrawerFooter>
      </form>
    </DrawerContent>
  );
};
