import Link from 'next/link';

import { IGroup } from '../types/definition';
import GroupItem from './GroupItem';
export default async function GroupList({ groups }: { groups: IGroup[] }) {
  return (
    <div>
      {groups.map((group) => (
        <Link href={`/groups/${group.groupId}`} key={group.groupId}>
          <GroupItem key={group.groupId} group={group} />
        </Link>
      ))}
    </div>
  );
}
