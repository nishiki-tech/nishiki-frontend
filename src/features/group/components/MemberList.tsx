import { fetchUserList } from '@/lib/api/data';

import { IUser } from '../types/definition';
export default async function MemberList({ id }: { id: string }) {
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
}
