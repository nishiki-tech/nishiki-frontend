import { fetchUserList } from '@/lib/api/data';
import { IUser } from '@/types/definition';

export const MembersPage = async ({ id }: { id: string }) => {
  const users: IUser[] = await fetchUserList(id);
  return (
    <>
      {users.map((user, i) => (
        <div key={i}> {user.name} </div>
      ))}
    </>
  );
};
