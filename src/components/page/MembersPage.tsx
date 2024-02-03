import { MenuKebabIcon, MenuMeatballIcon, PersonCircleIcon, PlusIcon } from '@/assets/images/icons';
import { Button, Card, Icon } from '@/components/ui';
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
          <Button className="flex justify-center items-center w-12 h-12">
            <Icon icon={PlusIcon} size={4.5} />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-1">
        {users.map((user, i) => (
          <Card key={i} asChild>
            <div className="flex justify-between gap-2">
              <div className="flex grow gap-4 items-center pl-4 py-2">
                <Icon icon={PersonCircleIcon} color="gray" size={11} />
                <span className="leading-5">{user.name}</span>
              </div>
              <Button variant="ghost" className="w-12">
                <Icon icon={MenuKebabIcon} size={5} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
