import { GroupSinglePage } from '@/components/page/GroupSingle';

export default function GroupSingle({ params }: { params: { id: string } }) {
  return <GroupSinglePage id={params.id} />;
}
