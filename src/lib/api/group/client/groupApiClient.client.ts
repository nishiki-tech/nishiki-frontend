'use client';

import { request } from '@/lib/api/common/client';
import { IGroup } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

/**
 * Interface representing the Payload for the function to create a group.
 * @property groupName - The name of the group.
 */
export interface IPostCreateGroupPayload {
  groupName: IGroup['name'];
}

/**
 * Interface representing the API response for the function to create a group.
 * @property groupId - The unique identifier of the group.
 */
export interface IPostCreateGroupApiResponse {
  groupId: IGroup['id'];
}

/**
 * Function to create a group.
 * @param payload - The payload for the function.
 * @returns The unique identifier of the group.
 */
export const postCreateGroup = async (
  payload: IPostCreateGroupPayload,
): Promise<Result<IPostCreateGroupApiResponse, string>> => {
  try {
    const data: IPostCreateGroupApiResponse = await request<IPostCreateGroupApiResponse>({
      url: API_BASE_URL + '/groups',
      method: 'POST',
      options: { body: JSON.stringify(payload) },
    });
    return Ok(data);
  } catch (err) {
    if (err instanceof Error) {
      return Err(err.message);
    }
    return Err('API response is invalid');
  }
};

/**
 * Interface representing the Payload for the function to rename a group.
 * @property groupName - The name of the group.
 */
interface IPutRenameGroupPayload {
  groupName: IGroup['name'];
}

/**
 * Function to rename a group.
 * @param groupId - The unique identifier of the group.
 * @param payload - The payload for the function.
 */

export const putRenameGroup = async (
  groupId: IGroup['id'],
  payload: IPutRenameGroupPayload,
): Promise<Result<undefined, string>> => {
  try {
    await request({
      url: `${API_BASE_URL}/groups/${groupId}`,
      method: 'PUT',
      options: { body: JSON.stringify(payload) },
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
 * Interface representing the API response for the function to generate a invitation link
 * @property invitationLinkHash - string, a hash for invitation link
 */
export interface IPutGenerateInvitationLink {
  invitationLinkHash: string;
}

/**
 * generate a invitation link hash
 * @param groupId unique Id for generating invitation link hash
 * @returns A hash: IPutGenerateInvitationLink of invitation link
 */
export const putGenerateInvitationLinkHash = async (
  groupId: string,
): Promise<Result<string, string>> => {
  try {
    const data = await request<string>({
      url: API_BASE_URL + '/groups/' + groupId + '?Action=generateInvitationLink',
      method: 'PUT',
    });

    const parsedData = JSON.parse(data) as IPutGenerateInvitationLink;
    return Ok(parsedData.invitationLinkHash);
  } catch (err) {
    if (err instanceof Error) {
    }
    return Err('API response is invalid');
  }
};

/**
 * Send a request to API to delete a member from a group
 * @param groupId The unique identifier of a group which a user will be deleted from
 * @param userId The unique identifier of a user who will be deleted from a group
 * @returns undefined on success, or an error message if fail
 */
export const deleteMember = async (
  groupId: string,
  userId: string,
): Promise<Result<undefined, string>> => {
  try {
    await request({
      url: `${API_BASE_URL}/groups/${groupId}/users/${userId}`,
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
