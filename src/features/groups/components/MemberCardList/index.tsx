import { PersonCircleIcon } from '@/assets/images/icons';
import { Card, Icon } from '@/components/ui';
import { fetchUserList } from '@/lib/api/user/server';
import { IGroup, IUser } from '@/types/definition';

import { MemberCardDropdownMenuTriggerButton } from './MemberCardDropdownMenuTriggerButton';

interface IMembersPageProps {
  /**
   * an identifier of a group
   */
  groupId: IGroup['id'];
}

export const MemberCardList = async ({ groupId }: IMembersPageProps) => {
  const users: IUser[] = await fetchUserList(groupId);

  return (
    <div className="flex flex-col gap-2 pb-1">
      {users.map((user, i) => (
        <Card key={i} asChild>
          <div className="flex justify-between gap-2">
            <div className="flex grow gap-4 items-center pl-4 py-2">
              <Icon icon={PersonCircleIcon} color="gray" size={11} />
              <span className="leading-5">{user.name}</span>
            </div>
            <MemberCardDropdownMenuTriggerButton userId={user.id} groupId={groupId} />
          </div>
        </Card>
      ))}
    </div>
  );
};
