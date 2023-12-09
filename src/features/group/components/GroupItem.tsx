import { Container } from '@/features/group/types/definition';
import { User } from '@/features/group/types/definition';
import { fetchContainerList } from '@/lib/api/data';
import { fetchUserList } from '@/lib/api/data';

import { Group } from '../types/definition';
import ContainersCnt from './ContainersCnt';
import UserCnt from './UserCnt';
export default async function GroupItem({ group }: { group: Group }) {
  const containers: Container[] = await fetchContainerList(group.groupId);
  const users: User[] = await fetchUserList(group.groupId);
  return (
    <div key={group.groupId}>
      <span>{group.groupId} </span>
      <span>{group.groupName} </span>
      <ContainersCnt containerCnt={containers.length} />
      <UserCnt userCnt={users.length} />
    </div>
  );
}
