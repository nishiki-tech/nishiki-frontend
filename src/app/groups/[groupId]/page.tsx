import { GroupSinglePage } from '@/components/page/GroupSinglePage';

export const dynamic = 'force-dynamic';

export default function GroupSingle({ params }: { params: { groupId: string } }) {
  return <GroupSinglePage groupId={params.groupId} />;
}
