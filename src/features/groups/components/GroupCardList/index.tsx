import { fetchGroupList } from '@/lib/api/groupApiClient';
import { IGroup } from '@/types/definition';

import { GroupCard } from './GroupCard';

export const GroupCardList = async () => {
  const groups: IGroup[] = await fetchGroupList();
  return (
    <div className="flex flex-col gap-2">
      {groups.map((group) => (
        <GroupCard key={group.id} groupId={group.id} groupName={group.name} />
      ))}
    </div>
  );
};
