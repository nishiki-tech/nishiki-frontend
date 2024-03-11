'use client';

import { request } from '@/lib/api/common/client';
import { IUser } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

/**
 * Interface representing the request body for the function to update user's data.
 * @property name - The name of the user.
 */
interface IPutUpdateUserRequestBody {
  name: IUser['name'];
}

/**
 * Function to update user's data
 * @param requestBody - The payload for the function.
 */

export const putUpdateGroup = async (
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
