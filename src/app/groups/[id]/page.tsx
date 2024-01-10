import { GroupSinglePage } from '@/components/page/GroupSingle';

export const dynamic = 'force-dynamic';

export default function GroupSingle({ params }: { params: { id: string } }) {
  return <GroupSinglePage id={params.id} />;
}
