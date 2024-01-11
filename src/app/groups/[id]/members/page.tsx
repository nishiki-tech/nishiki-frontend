import { MembersPage } from '@/components/page/MembersPage';

export const dynamic = 'force-dynamic';

export default function Members({ params }: { params: { id: string } }) {
  return <MembersPage id={params.id} />;
}
