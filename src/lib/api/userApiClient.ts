import { IUser } from '@/types/definition';

import { redirect } from 'next/navigation';

import { request } from './commonUtils';
const APIDOMAIN = 'http://localhost:8080';

/**
 * Interface representing the API response for multiple users.
 * @property {IUser[]} users - Array of user objects.
 */
interface IUsersResponse {
  users: IUser[];
}

/**
 * Fetch an array of users associated with a certain group id.
 * @param id groupId
 * @returns Array of IUser object
 */
export const fetchUserList = async (id: string): Promise<IUser[]> => {
  try {
    const response: IUsersResponse = await request<IUsersResponse>(
      APIDOMAIN + '/groups/' + id + '/users',
      'GET',
    );
    return response.users;
  } catch (err) {
    redirect('/not-found');
  }
};
