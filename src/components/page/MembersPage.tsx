import { fetchUserList } from '@/lib/api/data';
import { IUser } from '@/types/definition';

interface IMembersPageProps {
  id: string;
}

export const MembersPage = async ({ id }: IMembersPageProps) => {
  const users: IUser[] = await fetchUserList(id);
  return (
    <>
      {users.map((user, i) => (
        <div key={i}> {user.name} </div>
      ))}
    </>
  );
};
