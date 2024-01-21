import { fetchUserList } from '@/lib/api/user/server';
import { IUser } from '@/types/definition';

export const MemberList = async ({ id }: { id: string }) => {
  const users: IUser[] = await fetchUserList(id);
  return (
    <>
      Member
      {/* <MenuMeatBall /> */}
      {/* <MenuPlus /> */}
      {users.map((user, idx) => (
        <div key={idx}>{user.id}, </div>
      ))}
    </>
  );
};
