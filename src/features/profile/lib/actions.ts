import { deleteUser, putUpdateUser } from '@/lib/api/user/client';
import { IUser } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

import { deleteUserFormSchema, renameUserFormSchema, RenameUserInputs } from './schemas';

/**
 * Validate the inputs and call the API client to rename a user
 * @param userId - The ID of the user to rename
 * @param inputs - The raw inputs to be validated
 * @returns undefined on success, or an error message if the validation or request fails
 */
export const renameUser = async (
  userId: IUser['id'],
  inputs: RenameUserInputs,
): Promise<Result<undefined, string>> => {
  const validatedData = renameUserFormSchema.safeParse(inputs);
  if (!validatedData.success) return Err('Validation failed');
  const result = await putUpdateUser(userId, { name: validatedData.data.name });

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};

/**
 * Call the API client to remove a user
 * @param userId - The ID of the user to be removed
 * @returns undefined on success, or an error message if the request fails
 */
export const removeUser = async (userId: IUser['id']): Promise<Result<undefined, string>> => {
  console.log('userId', userId);

  const validatedData = deleteUserFormSchema.safeParse({ userId });

  if (!validatedData.success) console.log(validatedData.error);
  const result = await deleteUser(userId);

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};
