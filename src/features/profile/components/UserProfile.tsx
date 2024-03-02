'use client';
import { IUser } from '@/types/definition';

interface IUserProfileProps {
  /**
   * The name of the user to display.
   */
  name: IUser['name'];
}

export const UserProfile = ({ name }: IUserProfileProps) => {
  return (
    <div className="flex justify-center">
      <p>name : {name}</p>
    </div>
  );
};
