import { IPostContainerRequestBody, postContainer } from '@/lib/api/container/client';
import { deleteMember, postCreateGroup, putRenameGroup } from '@/lib/api/group/client';
import { IGroup, IUser } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

import {
  createContainerFormSchema,
  CreateContainerInputs,
  createGroupFormSchema,
  CreateGroupInputs,
  deleteMemberSchema,
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

/**
 * Function to call a API client to remove a member from a group
 * @param groupId The unique identifier of a group which a user will be removed from
 * @param userId The unique identifier of a user who will be removed from a group
 * @returns undefined on success, or an error message if fail
 */
export const removeMember = async (
  groupId: IGroup['id'],
  userId: IUser['id'],
): Promise<Result<undefined, string>> => {
  const validatedData = deleteMemberSchema.safeParse({ groupId, userId });
  if (!validatedData.success) return Err('Validation failed');

  const result = await deleteMember(groupId, userId);

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};

/**
 * Function to validate input, if valid, call the API client to create a new container
 * @param containerNameInput {@link CreateContainerInputs}The user input to be validated
 * @param groupId An identifier of a group which a new container will belong to.
 * @returns Undefined for success, an error message if validation or request fails
 */
export const createContainer = async (
  containerNameInput: CreateContainerInputs,
  groupId: IGroup['id'],
): Promise<Result<undefined, string>> => {
  const validatedData = createContainerFormSchema.safeParse(containerNameInput);
  if (!validatedData.success) return Err('Validation failed');

  const newContainer: IPostContainerRequestBody = {
    groupId: groupId,
    name: validatedData.data.name,
  };

  const result = await postContainer(newContainer);

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};
