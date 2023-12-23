import { fetchContainerList } from '@/lib/api/data';
import { fetchUserList } from '@/lib/api/data';
import { IContainer, IGroup, IUser } from '@/types/definition';

import Link from 'next/link';

import { ContainerCount } from './ContainerCount';
import { UserCount } from './UserCount';

export const GroupItem = async ({ group }: { group: IGroup }) => {
  const containers: IContainer[] = await fetchContainerList(group.id);
  const users: IUser[] = await fetchUserList(group.id);
  return (
    <Link href={`/groups/${group.id}`} key={group.id}>
      <span>{group.id} </span>
      <span>{group.name} </span>
      <ContainerCount containerCount={containers.length} />
      <UserCount userCount={users.length} />
    </Link>
  );
};
