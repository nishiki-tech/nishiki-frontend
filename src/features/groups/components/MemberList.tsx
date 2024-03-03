import { IconPersonCircle } from '@/assets/images/icons';
import { Icon } from '@/components/ui';
import { fetchUserList } from '@/lib/api/user/server';
import { IUser } from '@/types/definition';

import Link from 'next/link';

import { InviteMemberDialog } from './InviteMemberDialog';

export const MemberList = async ({ id }: { id: string }) => {
  const users: IUser[] = await fetchUserList(id);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2 h-12">
        <h2 className="text-xl">Members</h2>
        <InviteMemberDialog groupId={id} />
      </div>
      <Link href={`/groups/${id}/members`} className="flex flex-row gap-2">
        {users.map((_, idx) => (
          <Icon key={idx} icon={IconPersonCircle} color="gray" size={10} />
        ))}
      </Link>
    </div>
  );
};
