import Link from 'next/link';

import { Group } from '../types/definition';
import GroupItem from './GroupItem';
export default async function GroupList({ groups }: { groups: Group[] }) {
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
