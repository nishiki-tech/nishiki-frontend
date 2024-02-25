'use client';

import { request } from '@/lib/api/common/client';
import { IGroup } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

const BACKEND_API_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_API_DOMAIN || '';

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
      url: BACKEND_API_DOMAIN + '/groups',
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
      url: `${BACKEND_API_DOMAIN}/groups/${groupId}`,
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
 * @returns A hash: IPutGenerateInvitationLink of inivitation link
 */
export const putGenerateInvitationLinkHash = async (
  groupId: string,
): Promise<Result<string, string>> => {
  try {
    const data = await request<string>({
      url: BACKEND_API_DOMAIN + '/groups/' + groupId + '?Action=generateInvitationLink',
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

export const deleteMember = async (
  groupId: string,
  userId: string,
): Promise<Result<undefined, string>> => {
  try {
    await request({
      url: `${BACKEND_API_DOMAIN}/groups/${groupId}/users/${userId}`,
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
