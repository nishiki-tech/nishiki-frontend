import { IconPersonCircle } from '@/assets/images/icons';
import { Icon } from '@/components/ui';
import { fetchUserList } from '@/lib/api/user/server';
import { IGroup, IUser } from '@/types/definition';

import Link from 'next/link';

import { InviteMemberDialogTrigger } from './InviteMemberDialogTrigger';

interface IMemberListProps {
  /**
   * an identifier of a group which members belong to
   */
  groupId: IGroup['id'];
}

export const MemberList = async ({ groupId }: IMemberListProps) => {
  const users: IUser[] = await fetchUserList(groupId);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2 h-12">
        <h2 className="text-xl">Members</h2>
        <InviteMemberDialogTrigger groupId={groupId} />
      </div>
      <Link href={`/groups/${groupId}/members`} className="flex flex-row gap-2">
        {users.map((_, idx) => (
          <Icon key={idx} icon={IconPersonCircle} color="gray" size={10} />
        ))}
      </Link>
    </div>
  );
};
