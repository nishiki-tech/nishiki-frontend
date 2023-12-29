import { MenuMeatballIcon, PersonCircleIcon, PlusIcon } from '@/assets/images/icons';
import { Button, Card, Icon } from '@/components/ui';
import { fetchUserList } from '@/lib/api/data';
import { IUser } from '@/types/definition';

interface IMembersPageProps {
  id: string;
}

export const MembersPage = async ({ id }: IMembersPageProps) => {
  const users: IUser[] = await fetchUserList(id);
  return (
    <div className="px-4 pt-6 pb-16">
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-xl">Members</h2>
        <div className="flex gap-0.5">
          <div className="flex justify-center items-center">
            <Icon icon={MenuMeatballIcon} size={12} className="px-3.5" />
          </div>
          <div className="flex justify-center items-center">
            <Icon icon={PlusIcon} size={12} className="p-[15px]" />
          </div>
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
