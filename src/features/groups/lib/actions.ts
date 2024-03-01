import {
  deleteContainer,
  IPostContainerRequestBody,
  IPutRenameContainerRequestBody,
  postCreateContainer,
  putRenameContainer,
} from '@/lib/api/container/client';
import { deleteGroup, deleteMember, postCreateGroup, putRenameGroup } from '@/lib/api/group/client';
import { IContainer, IGroup, IUser } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

import {
  createContainerFormSchema,
  CreateContainerInputs,
  createGroupFormSchema,
  CreateGroupInputs,
  deleteContainerSchema,
  deleteGroupSchema,
  deleteMemberSchema,
  renameContainerFormSchema,
  RenameContainerInputs,
  renameGroupFormSchema,
  RenameGroupInputs,
} from './schemas';

/**
 * Function to call a API client to create a new group
 * @param inputs - {@link CreateGroupInputs} The user input for the new group
 * @returns undefined on success, or an error message if fail
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
 * Function to call a API client to rename a group
 * @param groupId - The ID of the group to be renamed
 * @param inputs  - {@link RenameGroupInputs} The user input for the new name of the group
 * @returns undefined on success, or an error message if fail
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
 * Function to call a API client to remove a group
 * @param groupId - The ID of the group to be removed
 * @returns undefined on success, or an error message if fail
 */
export const removeGroup = async (groupId: IGroup['id']): Promise<Result<undefined, string>> => {
  const validatedData = deleteGroupSchema.safeParse({ groupId });
  if (!validatedData.success) return Err('Validation failed');

  const result = await deleteGroup(groupId);

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};

/**
 * Function to call a API client to remove a member from a group
 * @param groupId - The unique identifier of a group which a user will be removed from
 * @param userId - The unique identifier of a user who will be removed from a group
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
 * @param containerNameInputs - {@link CreateContainerInputs} The user input to be validated
 * @param groupId - An identifier of a group which a new container will belong to.
 * @returns Undefined for success, an error message if validation or request fails
 */
export const createContainer = async (
  containerNameInputs: CreateContainerInputs,
  groupId: IGroup['id'],
): Promise<Result<undefined, string>> => {
  const validatedData = createContainerFormSchema.safeParse(containerNameInputs);
  if (!validatedData.success) return Err('Validation failed');

  const newContainer: IPostContainerRequestBody = {
    groupId: groupId,
    name: validatedData.data.name,
  };

  const result = await postCreateContainer(newContainer);

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};

/**
 * Function to validate input, if valid, call the API client to rename the container
 * @param containerId - An identifier of a container which a user is willing to change the name of
 * @param inputs - A user input {@link RenameContainerInputs} to be validated
 * @returns Undefined for success, or an error message if the validation or request fails
 */
export const renameContainer = async (
  containerId: IContainer['id'],
  inputs: RenameContainerInputs,
): Promise<Result<undefined, string>> => {
  const validatedData = renameContainerFormSchema.safeParse(inputs);
  if (!validatedData.success) return Err('Validation failed');

  const containerRenameRequestBody: IPutRenameContainerRequestBody = {
    containerName: validatedData.data.containerName,
  };

  const result = await putRenameContainer(containerId, containerRenameRequestBody);
  if (result.ok) return Ok(undefined);
  return Err(result.error);
};

export const removeContainer = async (
  containerId: IContainer['id'],
): Promise<Result<undefined, string>> => {
  const validatedData = deleteContainerSchema.safeParse({ containerId });
  if (!validatedData.success) return Err('Validation failed');

  const result = await deleteContainer(containerId);

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};
