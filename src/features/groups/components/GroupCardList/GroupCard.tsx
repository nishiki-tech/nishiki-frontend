import { Card } from '@/components/ui';
import { fetchContainerList } from '@/lib/api/data';
import { fetchUserList } from '@/lib/api/data';
import { IContainer, IGroup, IUser } from '@/types/definition';

import Link from 'next/link';

import { ContainerCount } from './ContainerCount';
import { UserCount } from './UserCount';

export const GroupCard = async ({ group }: { group: IGroup }) => {
  const containers: IContainer[] = await fetchContainerList(group.id);
  const users: IUser[] = await fetchUserList(group.id);
  return (
    <Card asChild>
      <Link href={`/groups/${group.id}`}>
        <div className="flex flex-col gap-3">
          <span className="text-lg">{group.name}</span>
          <div className="w-full flex justify-between items-center">
            <ContainerCount containerCount={containers.length} />
            <UserCount userCount={users.length} />
          </div>
        </div>
      </Link>
    </Card>
  );
};
