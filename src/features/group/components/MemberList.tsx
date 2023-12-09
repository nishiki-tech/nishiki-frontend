import { User } from '../types/definition';

export default function MemberList({ users }: { users: User[] }) {
  return (
    <div>
      Member
      {/* <MenuMeatBall /> */}
      {/* <MenuPlus /> */}
      {users.map((user, idx) => (
        <div key={idx}>{user.id}, </div>
      ))}
    </div>
  );
}
