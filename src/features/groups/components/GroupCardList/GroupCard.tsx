import { MenuKebabIcon } from '@/assets/images/icons';
import { Button, Card, Icon } from '@/components/ui';
import { fetchContainerList } from '@/lib/api/container/server';
import { fetchUserList } from '@/lib/api/user/server';
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
    <Card className="flex justify-between gap-2">
      <Link href={`/groups/${groupId}`} className="flex grow flex-col gap-3 pl-4 py-2">
        <span className="text-lg leading-6">{groupName}</span>
        <div className="w-full flex justify-between items-center">
          <ContainerCount containerCount={containers.length} />
          <UserCount userCount={users.length} />
        </div>
      </Link>
      <Button variant="ghost" className="w-12">
        <Icon icon={MenuKebabIcon} size={4.5} />
      </Button>
    </Card>
  );
};
