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

import { useState } from 'react';

export const CreateGroupDrawerContent = () => {
  const [groupName, setGroupName] = useState('');
  const createGroupAction = (groupName: string) => {
    console.log('Create group action', groupName);
  };
  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Create Group</DrawerTitle>
      </DrawerHeader>
      <form onSubmit={() => createGroupAction(groupName)}>
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
          <Button type="submit" size="md">
            Create
          </Button>
        </DrawerFooter>
      </form>
    </DrawerContent>
  );
};
