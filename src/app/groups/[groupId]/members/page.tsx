import { MembersPage } from '@/components/page/MembersPage';

export const dynamic = 'force-dynamic';

export default function Members({ params }: { params: { groupId: string } }) {
  return <MembersPage groupId={params.groupId} />;
}
