import ContainerList from '@/features/group/components/ContainerList';
import MemberList from '@/features/group/components/MemberList';
import { IUser } from '@/features/group/types/definition';
import { IContainer } from '@/features/group/types/definition';

export function GroupSinglePage({
  users,
  containers,
}: {
  users: IUser[];
  containers: IContainer[];
}) {
  return (
    <div>
      <MemberList users={users} />
      <ContainerList containers={containers} />
    </div>
  );
}
