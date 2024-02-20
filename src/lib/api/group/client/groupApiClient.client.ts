'use client';

import { request } from '@/lib/api/common/client';
import { IGroup } from '@/types/definition';
const BACKEND_API_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_API_DOMAIN || '';

/**
 * Interface representing the Params for the method to create a group.
 * @property groupName - The name of the group.
 */
export interface ICreateGroupParams {
  groupName: IGroup['name'];
}

/**
 * Interface representing the API response for the method to create a group.
 * @property groupId - The unique identifier of the group.
 */
export interface ICreateGroupApiResponse {
  groupId: IGroup['id'];
}

/**
 * Interface representing the API response for the method to generate a invitation link
 * @property invitationLinkHash - string, a hash for invitation link
 */
export interface IGenerateInvitationLink {
  invitationLinkHash: string;
}

/**
 * Create a new group.
 * @param params - The parameters for the group to be created.
 * @returns The ID of the newly created group.
 */
export const createGroup = async (params: ICreateGroupParams): Promise<string> => {
  try {
    const data: ICreateGroupApiResponse = await request<ICreateGroupApiResponse>({
      url: BACKEND_API_DOMAIN + '/groups',
      method: 'POST',
      options: { body: JSON.stringify(params) },
    });
    return data.groupId;
  } catch (err) {
    throw new Error('API response is invalid');
  }
};

/**
 * generate a invitation link hash
 * @param groupId unique Id for generating invitation link hash
 * @returns A hash: IGenerateInvitationLink of inivitation link
 */
export const generateInvitationLinkHash = async (groupId: string): Promise<string> => {
  try {
    const data: IGenerateInvitationLink = await request<IGenerateInvitationLink>({
      url: BACKEND_API_DOMAIN + '/groups/' + groupId + '?Action=generateInvitationLink',
      method: 'PUT',
    });

    const { invitationLinkHash } = data;
    return invitationLinkHash;
  } catch (err) {
    throw new Error('API response is invalid');
  }
};
