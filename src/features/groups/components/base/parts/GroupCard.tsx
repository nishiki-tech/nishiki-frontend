import { Card } from '@/components/ui';
import { fetchContainerList } from '@/lib/api/data';
import { fetchUserList } from '@/lib/api/data';
import { IContainer, IGroup, IUser } from '@/types/definition';

import Link from 'next/link';

import { ContainerCount, UserCount } from '.';

export const GroupCard = async ({ group }: { group: IGroup }) => {
  const containers: IContainer[] = await fetchContainerList(group.id);
  const users: IUser[] = await fetchUserList(group.id);
  return (
    <Link href={`/groups/${group.id}`} key={group.id}>
      <Card asChild>
        <div className="flex flex-col gap-3">
          <div className="w-full flex items-center justify-start">
            <p className="text-lg">{group.name}</p>
          </div>
          <div className="w-full flex justify-between">
            <ContainerCount containerCount={containers.length} />
            <UserCount userCount={users.length} />
          </div>
        </div>
      </Card>
    </Link>
  );
};
