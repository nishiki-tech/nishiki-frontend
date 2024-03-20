'use client';

import { request } from '@/lib/api/common/client';
import { IUser } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

/**
 * Interface representing the request body for the function to update user's data.
 */
interface IPutUpdateUserRequestBody {
  /**
   * The new name of the user.
   */
  name: IUser['name'];
}

/**
 * Function to update user's data
 * @param requestBody - The payload for the function.
 */
export const putUpdateUser = async (
  userId: IUser['id'],
  requestBody: IPutUpdateUserRequestBody,
): Promise<Result<undefined, string>> => {
  try {
    await request({
      url: `${API_BASE_URL}/users/${userId}`,
      method: 'PUT',
      options: { body: JSON.stringify(requestBody) },
    });
    return Ok(undefined);
  } catch (err) {
    if (err instanceof Error) {
      return Err(err.message);
    }
    return Err('API response is invalid');
  }
};

/**
 *  Function to delete a user
 * @param userId - The id of the user to delete.
 */
export const deleteUser = async (userId: IUser['id']): Promise<Result<undefined, string>> => {
  try {
    await request({
      url: `${API_BASE_URL}/users/${userId}`,
      method: 'DELETE',
    });
    return Ok(undefined);
  } catch (err) {
    if (err instanceof Error) {
      return Err(err.message);
    }
    return Err('API response is invalid');
  }
};
