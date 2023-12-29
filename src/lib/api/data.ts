import { IContainer, IFood, IGroup, IUser } from '@/types/definition';

import axios from 'axios';

const APIDOMAIN = 'http://localhost:8080';

/**
 * Interface representing the API response for a group.
 * @property {string} groupId - The unique identifier of the group.
 * @property {string} groupName - The name of the group.
 */
interface IGroupApiResponse {
  groupId: string;
  groupName: string;
}

/**
 * Interface representing the API response for a container.
 * @property {string} id - The unique identifier of the container.
 * @property {string} name - The name of the container.
 * @property {IGroupApiResponse} group - The group to which this container belongs.
 * @property {IFood[]} foods - Array of foods contained in this container.
 */
interface IContainerApiResponse {
  id: string;
  name: string;
  group: IGroupApiResponse;
  foods: IFood[];
}

/**
 * Interface representing the API response for multiple groups.
 * @property {IGroupApiResponse[]} groups - Array of group objects.
 */
interface IGroupsResponse {
  groups: IGroupApiResponse[];
}

/**
 * Interface representing the API response for multiple containers.
 * @property {IContainerApiResponse[]} containers - Array of container objects.
 */
interface IContainersResponse {
  containers: IContainerApiResponse[];
}

/**
 * Interface representing the API response for multiple users.
 * @property {IUser[]} users - Array of user objects.
 */
interface IUsersResponse {
  users: IUser[];
}

/**
 * Converting a Container object from the Backend API to a front Interface
 * @param containers array of containers with Backend API schema
 * @returns array of containers with IContainer
 */
function convertApiResponsContainers(containers: IContainerApiResponse[]): IContainer[] {
  return containers.map((container: IContainerApiResponse) => ({
    ...container,
    group: {
      id: container.group.groupId,
      name: container.group.groupName,
    },
  }));
}

/**
 * Fetch array of groups to which the logged-in user belongs.
 * @returns Array of IGroup object
 */
export async function fetchGroupList(): Promise<IGroup[]> {
  try {
    const res = await axios.get<IGroupsResponse>(APIDOMAIN + '/groups');
    return res.data.groups.map((group) => ({
      id: group.groupId,
      name: group.groupName,
    }));
  } catch (err) {
    throw new Error('API response is invalid');
  }
}

/**
 * Fetch an array of containers associated with a certain group .
 * @param id groupId
 * @returns Array of IContainer object
 */
export async function fetchContainerList(id: string): Promise<IContainer[]> {
  try {
    const res = await axios.get<IContainersResponse>(APIDOMAIN + '/groups/' + id + '/containers');
    return convertApiResponsContainers(res.data.containers);
  } catch (err) {
    throw new Error('API response is invalid');
  }
}

/**
 * Fetch an array of containers associated with a logged-in user.
 * @returns Array of IContainer object
 */
export async function fetchAllContainerList(): Promise<IContainer[]> {
  try {
    const res = await axios.get<IContainersResponse>(APIDOMAIN + '/containers');
    return convertApiResponsContainers(res.data.containers);
  } catch (err) {
    throw new Error('API response is invalid');
  }
}

/**
 * Fetch an array of users associated with a certain group id.
 * @param id groupId
 * @returns Array of IUser object
 */
export async function fetchUserList(id: string): Promise<IUser[]> {
  try {
    const res = await axios.get<IUsersResponse>(APIDOMAIN + '/groups/' + id + '/users');
    return res.data.users;
  } catch (err) {
    throw new Error('API response is invalid');
  }
}
