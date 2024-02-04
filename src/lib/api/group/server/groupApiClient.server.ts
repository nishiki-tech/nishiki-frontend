import { request } from '@/lib/api/common/server';
import { IGroup } from '@/types/definition';

const BACKEND_API_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_API_DOMAIN || '';

/**
 * Interface representing the API response for a group.
 * @property groupId - The unique identifier of the group.
 * @property groupName - The name of the group.
 */
export interface IGroupApiResponse {
  groupId: string;
  groupName: string;
}

/**
 * Interface representing the API response for multiple groups.
 * @property groups - Array of group objects.
 */
interface IGroupsResponse {
  groups: IGroupApiResponse[];
}

/**
 * Fetch array of groups to which the logged-in user belongs.
 * @returns Array of IGroup object
 */
export const fetchGroupList = async (): Promise<IGroup[]> => {
  try {
    const data: IGroupsResponse = await request<IGroupsResponse>({
      url: BACKEND_API_DOMAIN + '/groups',
      method: 'GET',
    });
    return data.groups.map((group) => ({
      id: group.groupId,
      name: group.groupName,
    }));
  } catch (err) {
    throw new Error('API response is invalid'); // TODO: display error page
  }
};

export interface IGroupJoinResponse {
  groupId: IGroup['id'];
}

export const putJoinRequest = async (hashValue: string): Promise<IGroup['id'] | undefined> => {
  try {
    const data: IGroupJoinResponse = await request<IGroupJoinResponse>({
      url: BACKEND_API_DOMAIN + '/groups?Action=joinToGroup',
      method: 'PUT',
      options: {
        body: JSON.stringify({ invitationLinkHash: hashValue }),
      },
    });
    return data.groupId;
  } catch (err) {
    return undefined;
  }
};
