import {
  CreateGroupButton,
  GroupCardList,
  GroupCollectionMenuButton,
} from '@/features/groups/components';
import { createGroup } from '@/lib/api';

export const GroupsPage = () => {
  const handleCreateGroup = async (groupName: string) => {
    'use server';
    await createGroup({ groupName });
  };
  return (
    <div className="pt-6 px-4 pb-2 flex flex-col gap-2">
      <div className="h-12 w-full flex items-center justify-end gap-0.5">
        <GroupCollectionMenuButton />
        <CreateGroupButton handleCreateGroup={handleCreateGroup} />
      </div>
      <GroupCardList />
    </div>
  );
};
