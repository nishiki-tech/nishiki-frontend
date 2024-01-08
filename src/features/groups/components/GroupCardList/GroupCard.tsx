import { Card } from '@/components/ui';
import { fetchContainerList } from '@/lib/api/containerApiClient';
import { fetchUserList } from '@/lib/api/userApiClient';
import { IContainer, IUser } from '@/types/definition';

import Link from 'next/link';
import { FC } from 'react';

import { ContainerCount } from './ContainerCount';
import { UserCount } from './UserCount';

interface IGroupCardProps {
  groupId: string;
  groupName: string;
}

export const GroupCard: FC<IGroupCardProps> = async ({ groupId, groupName }) => {
  const containers: IContainer[] = await fetchContainerList(groupId);
  const users: IUser[] = await fetchUserList(groupId);
  return (
    <Card asChild>
      <Link href={`/groups/${groupId}`}>
        <div className="flex flex-col gap-3">
          <span className="text-lg">{groupName}</span>
          <div className="w-full flex justify-between items-center">
            <ContainerCount containerCount={containers.length} />
            <UserCount userCount={users.length} />
          </div>
        </div>
      </Link>
    </Card>
  );
};
