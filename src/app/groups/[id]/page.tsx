import { GroupSinglePage } from '@/components/page/GroupSingle';
import { User } from '@/features/group/types/definition';
import { Container } from '@/features/group/types/definition';
import { fetchContainerList, fetchUserList } from '@/lib/api/data';

export default async function GroupSingle({ params }: { params: { id: string } }) {
  const users: User[] = await fetchUserList(params.id);
  const containers: Container[] = await fetchContainerList(params.id);
  return <GroupSinglePage users={users} containers={containers} />;
}
