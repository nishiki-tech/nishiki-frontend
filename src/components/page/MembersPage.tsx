import { MenuMeatballIcon, PersonCircleIcon } from '@/assets/images/icons';
import { Button, Card, Icon } from '@/components/ui';
import { InviteMemberButton } from '@/features/groups/components/InviteMemberButton';
import { fetchUserList } from '@/lib/api/user/server';
import { IUser } from '@/types/definition';

interface IMembersPageProps {
  id: string;
}

export const MembersPage = async ({ id }: IMembersPageProps) => {
  const users: IUser[] = await fetchUserList(id);
  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-2 h-12">
        <h2 className="text-xl">Members</h2>
        <div className="flex gap-0.5">
          <Button className="flex justify-center items-center w-12 h-12">
            <Icon icon={MenuMeatballIcon} size={5} />
          </Button>
          <InviteMemberButton />
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-1">
        {users.map((user, i) => (
          <Card key={i} asChild>
            <Button className="flex gap-3 justify-start items-center">
              <Icon icon={PersonCircleIcon} color="gray" size={11} />
              {user.name}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
