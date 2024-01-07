import { IGroup } from '@/types/definition';

import { GroupCard } from './GroupCard';

export const GroupCardList = ({ groups }: { groups: IGroup[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </div>
  );
};
