import { IUser } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

import { request } from '../../common/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

/**
 * Interface representing the API response for auth/me API endpoint.
 * @property userId - Id of current logged in user.
 */
interface IGetCurrentUserResponse {
  userId: IUser['id'];
}

/**
 * Fetch the current logged in user's id.
 * @returns {Promise<Result<IGetCurrentUserResponse | string>>} - Id of current logged in user.
 */
export const getCurrentUserId = async (): Promise<Result<IGetCurrentUserResponse, string>> => {
  try {
    const response = await request<IGetCurrentUserResponse>({
      url: API_BASE_URL + '/auth/me',
      method: 'GET',
    });
    return Ok(response);
  } catch (err) {
    return Err('API response is invalid');
  }
};
