import { putUpdateUser } from '@/lib/api/user/client';

import { Err, Ok } from 'result-ts-type';

import { renameUserFormSchema, RenameUserInputs } from './schemas';

export const renameUser = async (userId: string, inputs: RenameUserInputs) => {
  const validatedData = renameUserFormSchema.safeParse(inputs);
  if (!validatedData.success) return Err('Validation failed');
  const result = await putUpdateUser(userId, { name: validatedData.data.name });

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};
