import { IGroup } from '@/types/definition';

import { GroupCard } from './GroupCard';

export const GroupCardList = ({ groups }: { groups: IGroup[] }) => {
  return (
    <div className="px-4">
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </div>
  );
};
