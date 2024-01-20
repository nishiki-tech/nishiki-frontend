import { putJoinRequest } from '@/lib/api/group/server/groupApiClient.server';

import { redirect } from 'next/navigation';

export default async function Join({ params }: { params: { hash: string } }) {
  const groupId = await putJoinRequest(params.hash);
  if (groupId) {
    redirect('/groups/' + groupId);
  } else {
    redirect('/groups');
  }
}
