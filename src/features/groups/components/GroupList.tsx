import { IGroup } from '@/types/definition';

import { GroupItem } from './GroupItem';

export const GroupList = async ({ groups }: { groups: IGroup[] }) => {
  return (
    <>
      {groups.map((group) => (
        <GroupItem key={group.id} group={group} />
      ))}
    </>
  );
};
