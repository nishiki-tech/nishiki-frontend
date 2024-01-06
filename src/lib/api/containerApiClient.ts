import { IContainer, IFood, IGroup } from '@/types/definition';

import { redirect } from 'next/navigation';

import { request } from './commonUtils';

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
 * Interface representing the API response for multiple containers.
 * @property {IContainerApiResponse[]} containers - Array of container objects.
 */
interface IContainersResponse {
  containers: IContainerApiResponse[];
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
    const data: IGroupsResponse = await request<IGroupsResponse>(APIDOMAIN + '/groups', 'GET');
    return data.groups.map((group) => ({
      id: group.groupId,
      name: group.groupName,
    }));
  } catch (err) {
    redirect('/not-found'); // TODO: display error page
  }
};

/**
 * Converting a Container object from the Backend API to a front Interface
 * @param containers array of containers with Backend API schema
 * @returns array of containers with IContainer
 */
const convertApiResponseContainers = (containers: IContainerApiResponse[]): IContainer[] => {
  return containers.map((container: IContainerApiResponse) => ({
    ...container,
    group: {
      id: container.group.groupId,
      name: container.group.groupName,
    },
  }));
};

/**
 * Fetch an array of containers associated with a certain group .
 * @param id groupId
 * @returns Array of IContainer object
 */
export const fetchContainerList = async (id: string): Promise<IContainer[]> => {
  try {
    const data: IContainersResponse = await request<IContainersResponse>(
      APIDOMAIN + '/groups/' + id + '/containers',
      'GET',
    );
    return convertApiResponseContainers(data.containers);
  } catch (err) {
    redirect('/not-found'); // TODO: display error page
  }
};

/**
 * Fetch an array of containers associated with a logged-in user.
 * @returns Array of IContainer object
 */
export const fetchAllContainerList = async (): Promise<IContainer[]> => {
  try {
    const data: IContainersResponse = await request<IContainersResponse>(
      APIDOMAIN + '/containers',
      'GET',
    );
    return convertApiResponseContainers(data.containers);
  } catch (err) {
    redirect('/not-found'); // TODO: display error page
  }
};
