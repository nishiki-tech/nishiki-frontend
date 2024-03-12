import { putUpdateUser } from '@/lib/api/user/client';

import { Err, Ok, Result } from 'result-ts-type';

import { renameUserFormSchema, RenameUserInputs } from './schemas';

/**
 * Validate the inputs and call the API client to rename a user
 * @param userId - The ID of the user to rename
 * @param inputs - The raw inputs to be validated
 * @returns undefined on success, or an error message if the validation or request fails
 */
export const renameUser = async (
  userId: string,
  inputs: RenameUserInputs,
): Promise<Result<undefined, string>> => {
  const validatedData = renameUserFormSchema.safeParse(inputs);
  if (!validatedData.success) return Err('Validation failed');
  const result = await putUpdateUser(userId, { name: validatedData.data.name });

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};
