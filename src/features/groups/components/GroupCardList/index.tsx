import { getGroupList } from '@/lib/api/group/server';
import { IGroup } from '@/types/definition';

import { GroupCard } from './GroupCard';

export const GroupCardList = async () => {
  const groups: IGroup[] = await getGroupList();
  return (
    <div className="flex flex-col gap-2">
      {groups.map((group) => (
        <GroupCard key={group.id} groupId={group.id} groupName={group.name} />
      ))}
    </div>
  );
};
