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
import { createGroup } from '@/lib/api/group/client';

import { FormEvent, useState } from 'react';

export const CreateGroupDrawerContent = () => {
  const [groupName, setGroupName] = useState('');

  // Temporary Submit function. It will be replaced when we're implementing `Form` component
  const onSubmitCreateGroup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createGroup({ groupName });
  };

  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Create Group</DrawerTitle>
      </DrawerHeader>
      <form onSubmit={onSubmitCreateGroup}>
        <DrawerBody>
          <Input
            id="groupName"
            name="groupName"
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
