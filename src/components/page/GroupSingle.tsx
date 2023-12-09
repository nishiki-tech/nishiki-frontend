import ContainerList from '@/features/group/components/ContainerList';
import MemberList from '@/features/group/components/MemberList';
import { User } from '@/features/group/types/definition';
import { Container } from '@/features/group/types/definition';

export function GroupSinglePage({ users, containers }: { users: User[]; containers: Container[] }) {
  return (
    <div>
      <MemberList users={users} />
      <ContainerList containers={containers} />
    </div>
  );
}
