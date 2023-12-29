import { MenuMeatballIcon, PersonCircleIcon, PlusIcon } from '@/assets/images/icons';
import { Card, Icon } from '@/components/ui';
import { fetchUserList } from '@/lib/api/data';
import { IUser } from '@/types/definition';

interface IMembersPageProps {
  id: string;
}

export const MembersPage = async ({ id }: IMembersPageProps) => {
  const users: IUser[] = await fetchUserList(id);
  return (
    <div className="px-4">
      <div className="flex items-center mt-[35px] mb-5">
        <h2 className="text-xl mr-44">Members</h2>
        <div className="w-12 h-12 flex justify-center items-center">
          <Icon icon={MenuMeatballIcon} className="w-5 h-1" />
        </div>
        <div className="w-12 h-12 flex items-center justify-center">
          <Icon icon={PlusIcon} className="w-[1.125rem] h-[1.125rem]" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {users.map((user, i) => (
          <Card key={i} className="flex h-[3.75rem] items-center">
            <Icon icon={PersonCircleIcon} color="gray" size={11} className="pl-1" />
            <div className="ml-3">{user.name}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};
