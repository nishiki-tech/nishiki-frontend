import { IGroup } from '../types/definition';
import GroupItem from './GroupItem';
export default async function GroupList({ groups }: { groups: IGroup[] }) {
  return (
    <>
      {groups.map((group) => (
        <GroupItem key={group.groupId} group={group} />
      ))}
    </>
  );
}
