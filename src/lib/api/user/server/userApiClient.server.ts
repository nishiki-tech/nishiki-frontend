import { IUser } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

import { request } from '../../common/server';

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
      url: API_BASE_URL + '/groups/' + id + '/users',
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
  id: IUser['id'];

  /**
   * The name of the user.
   */
  name: IUser['name'];
}

/**
 * The API response object type is  currently different from how it's defined in the web API document.
 * We named current response object as {@link ITemporaryGetUserByIdResponse.}
 * Once the API is fixed, we need to update the response object type of the function to {@link IGetUserByIdResponse}
 * This issue is mentioned in the issue {@link https://github.com/nishiki-tech/nishiki-frontend/issues/255}
 */
export interface ITemporaryGetUserByIdResponse {
  status: string;
  statusCode: number;
  body: {
    userId: IUser['id'];
    username: IUser['name'];
  };
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
    const data = await request<string>({
      url: API_BASE_URL + '/users/' + userId,
      method: 'GET',
    });

    /**
     * The API currently returns a JSON string instead of object
     * This issue is mentioned in the issue {@link https://github.com/nishiki-tech/nishiki-frontend/issues/255}
     * Thus, fow now, we need to parse the response in here.
     */
    const parsedData = JSON.parse(data) as ITemporaryGetUserByIdResponse;

    /**
     * The data modified to match the interface {@link IGetUserByIdResponse},
     * which is defined in the web API document.
     */
    const modifiedData: IGetUserByIdResponse = {
      id: parsedData.body.userId,
      name: parsedData.body.username,
    };

    return Ok(modifiedData);
  } catch (error) {
    if (error instanceof Error) {
      return Err(error.message);
    }
    return Err('API response is invalid');
  }
};
