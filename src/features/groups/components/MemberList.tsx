import { PersonCircleIcon, PlusIcon } from '@/assets/images/icons';
import { Button, Icon } from '@/components/ui';
import { fetchUserList } from '@/lib/api/user/server';
import { IUser } from '@/types/definition';

import Link from 'next/link';

export const MemberList = async ({ id }: { id: string }) => {
  const users: IUser[] = await fetchUserList(id);
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2 h-12">
        <h2 className="text-xl">Members</h2>
        <Button className="flex justify-center items-center w-12 h-12">
          <Icon icon={PlusIcon} size={4.5} />
        </Button>
      </div>
      <Link href={`/groups/${id}/members`} className="flex flex-row gap-2">
        {users.map((_, idx) => (
          <Button key={idx} className="">
            <Icon icon={PersonCircleIcon} color="gray" size={10} />
          </Button>
        ))}
      </Link>
    </div>
  );
};
