import { IContainer } from '@/features/groups/types/definition';
import { IUser } from '@/features/groups/types/definition';
import { fetchContainerList } from '@/lib/api/data';
import { fetchUserList } from '@/lib/api/data';

import Link from 'next/link';

import { IGroup } from '../types/definition';
import ContainersCount from './ContainersCount';
import UserCount from './UserCount';

export const GroupItem = async ({ group }: { group: IGroup }) => {
  const containers: IContainer[] = await fetchContainerList(group.groupId);
  const users: IUser[] = await fetchUserList(group.groupId);
  return (
    <Link href={`/groups/${group.groupId}`} key={group.groupId}>
      <span>{group.groupId} </span>
      <span>{group.groupName} </span>
      <ContainersCount containerCount={containers.length} />
      <UserCount userCount={users.length} />
    </Link>
  );
};
