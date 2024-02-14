import { fetchContainerList } from '@/lib/api/container/server';
import { fetchUserList } from '@/lib/api/user/server';
import { IContainer, IUser } from '@/types/definition';

import { FC } from 'react';

import { GroupCardContent } from './GroupCardContent';

interface IGroupCardProps {
  groupId: string;
  groupName: string;
}

export const GroupCard: FC<IGroupCardProps> = async ({ groupId, groupName }) => {
  const containers: IContainer[] = await fetchContainerList(groupId);
  const users: IUser[] = await fetchUserList(groupId);
  return (
    <GroupCardContent
      groupId={groupId}
      groupName={groupName}
      containerCount={containers.length}
      userCount={users.length}
    />
  );
};
