import { request } from '@/lib/api/common/server';
import { IGroup } from '@/types/definition';

const BACKEND_API_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_API_DOMAIN || '';

/**
 * Interface representing the API response for a group.
 * @property {string} groupId - The unique identifier of the group.
 * @property {string} groupName - The name of the group.
 */
export interface IGroupApiResponse {
  groupId: string;
  groupName: string;
}

/**
 * Interface representing the API response for multiple groups.
 * @property {IGroupApiResponse[]} groups - Array of group objects.
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
