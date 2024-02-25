import { deleteMember, postCreateGroup, putRenameGroup } from '@/lib/api/group/client';

import { Err, Ok, Result } from 'result-ts-type';

import {
  createGroupFormSchema,
  CreateGroupInputs,
  renameGroupFormSchema,
  RenameGroupInputs,
} from './schemas';

/**
 * Function to create a group.
 * @param inputs - The input for the function.
 * @returns The unique identifier of the group.
 */
export const createGroup = async (
  inputs: CreateGroupInputs,
): Promise<Result<undefined, string>> => {
  const validatedData = createGroupFormSchema.safeParse(inputs);
  if (!validatedData.success) return Err('Validation failed');

  const result = await postCreateGroup({ groupName: validatedData.data.groupName });

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};

/**
 * Function to rename a group.
 * @param groupId - The unique identifier of the group.
 * @param inputs - The input for the function.
 */

export const renameGroup = async (
  groupId: string,
  inputs: RenameGroupInputs,
): Promise<Result<undefined, string>> => {
  const validatedData = renameGroupFormSchema.safeParse(inputs);
  if (!validatedData.success) return Err('Validation failed');

  const result = await putRenameGroup(groupId, { groupName: validatedData.data.groupName });
  if (result.ok) return Ok(undefined);
  return Err(result.error);
};

export const removeMember = async (
  groupId: string,
  userId: string,
): Promise<Result<undefined, string>> => {
  const result = await deleteMember(groupId, userId);

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};
