import { GroupList } from '@/features/groups/components/GroupList';
import { fetchGroupList } from '@/lib/api';
import { IGroup } from '@/types/definition';

export const GroupsPage = async () => {
  const groups: IGroup[] = await fetchGroupList();
  return (
    <>
      GroupsPage
      <GroupList groups={groups} />
    </>
  );
};
