import { fetchContainerList } from '@/lib/api/data';
import { fetchUserList } from '@/lib/api/data';
import { IContainer, IGroup, IUser } from '@/types/definition';

import Link from 'next/link';

import { ContainerCount } from './ContainerCount';
import { UserCount } from './UserCount';

export const GroupItem = async ({ group }: { group: IGroup }) => {
  const containers: IContainer[] = await fetchContainerList(group.groupId);
  const users: IUser[] = await fetchUserList(group.groupId);
  return (
    <Link href={`/groups/${group.groupId}`} key={group.groupId}>
      <span>{group.groupId} </span>
      <span>{group.groupName} </span>
      <ContainerCount containerCount={containers.length} />
      <UserCount userCount={users.length} />
    </Link>
  );
};
