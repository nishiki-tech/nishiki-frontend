import { IUser } from '@/types/definition';

import { request } from '../../common/server/commonUtils.server';

const BACKEND_API_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_API_DOMAIN || '';

/**
 * Interface representing the API response for multiple users.
 * @property users - Array of user objects.
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
    const response: IUsersResponse = await request<IUsersResponse>({
      url: BACKEND_API_DOMAIN + '/groups/' + id + '/users',
      method: 'GET',
    });
    return response.users;
  } catch (err) {
    throw new Error('API response is invalid'); // TODO: display error page
  }
};
