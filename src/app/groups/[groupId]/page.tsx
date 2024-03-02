import { GroupSinglePage } from '@/components/page/GroupSingle';

export const dynamic = 'force-dynamic';

export default function GroupSingle({ params }: { params: { groupId: string } }) {
  return <GroupSinglePage groupId={params.groupId} />;
}
