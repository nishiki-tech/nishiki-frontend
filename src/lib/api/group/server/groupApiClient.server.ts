import { request } from '@/lib/api/common/server';
import { IGroup } from '@/types/definition';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

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
 * Fetch a list of groups that the user is a member of.
 * @returns Array of IGroup object
 */
export const getGroupList = async (): Promise<IGroup[]> => {
  try {
    const data: IGroupsResponse = await request<IGroupsResponse>({
      url: API_BASE_URL + '/groups',
      method: 'GET',
    });
    return data.groups.map((group) => ({
      id: group.groupId,
      name: group.groupName,
    }));
  } catch (err) {
    throw new Error('API response is invalid');
  }
};

/**
 * Fetch a single group by its ID.
 * @param groupId - The ID of the group to fetch.
 * @returns IGroup object
 */
export const getGroup = async (groupId: string): Promise<IGroup> => {
  try {
    const data: IGroupApiResponse = await request<IGroupApiResponse>({
      url: `${API_BASE_URL}/groups/${groupId}`,
      method: 'GET',
    });
    return { id: data.groupId, name: data.groupName };
  } catch (err) {
    throw new Error('API response is invalid');
  }
};

export interface IGroupJoinResponse {
  groupId: IGroup['id'];
}

export const putJoinRequest = async (hashValue: string): Promise<IGroup['id'] | undefined> => {
  try {
    const data: IGroupJoinResponse = await request<IGroupJoinResponse>({
      url: API_BASE_URL + '/groups?Action=joinToGroup',
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
