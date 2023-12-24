import { GroupsPage } from '@/components/page/GroupsPage';
import { fetchGroupList } from '@/lib/api/data';
import { IGroup } from '@/types/definition';

export default async function Groups() {
  const groups: IGroup[] = await fetchGroupList();
  return <GroupsPage groups={groups} />;
}
