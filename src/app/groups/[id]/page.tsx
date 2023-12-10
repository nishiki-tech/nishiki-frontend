import { GroupSinglePage } from '@/components/page/GroupSingle';
import { IUser } from '@/features/group/types/definition';
import { IContainer } from '@/features/group/types/definition';
import { fetchContainerList, fetchUserList } from '@/lib/api/data';

export default async function GroupSingle({ params }: { params: { id: string } }) {
  const users: IUser[] = await fetchUserList(params.id);
  const containers: IContainer[] = await fetchContainerList(params.id);
  return <GroupSinglePage users={users} containers={containers} />;
}
