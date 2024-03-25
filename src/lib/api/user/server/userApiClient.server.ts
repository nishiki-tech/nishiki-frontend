import { request } from '@/lib/api/common/server';
import { IUser } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

/**
 * Interface representing the API response for multiple users.
 * @property users - Array of user objects.
 */
interface IUsersResponse {
  users: IUser[];
}

/**
 * Fetch an array of users associated with a certain group id.
 * @param id - groupId
 * @returns Array of IUser object
 */
export const fetchUserList = async (id: string): Promise<IUser[]> => {
  try {
    const response: IUsersResponse = await request<IUsersResponse>({
      url: `${API_BASE_URL}/groups/${id}/users`,
      method: 'GET',
    });
    return response.users;
  } catch (err) {
    throw new Error('API response is invalid'); // TODO: display error page
  }
};

/**
 * Interface representing the API response for the function to get a user by userId.
 */
export interface IGetUserByIdResponse {
  /**
   * The unique identifier of the user to get.
   */
  userId: IUser['id'];

  /**
   * The name of the user.
   */
  name: IUser['name'];
}

/**
 * Fetch a user by userId.
 * @param userId - The unique identifier of the user.
 * @returns The information of the user.
 */
export const getUserById = async (
  userId: IUser['id'],
): Promise<Result<IGetUserByIdResponse, string>> => {
  try {
    const data = await request<IGetUserByIdResponse>({
      url: `${API_BASE_URL}/users/${userId}`,
      method: 'GET',
    });

    return Ok(data);
  } catch (error) {
    if (error instanceof Error) {
      return Err(error.message);
    }
    return Err('API response is invalid');
  }
};
