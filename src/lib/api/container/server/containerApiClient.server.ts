import { request } from '@/lib/api/common/server';
import { IContainer, IFood } from '@/types/definition';

import { IGroupApiResponse } from '../../group/server/groupApiClient.server';

const BACKEND_API_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_API_DOMAIN || '';

/**
 * Interface representing the API response for a container.
 * @property id - The unique identifier of the container.
 * @property name - The name of the container.
 * @property group - The group to which this container belongs.
 * @property foods - Array of foods contained in this container.
 */
interface IContainerApiResponse {
  id: string;
  name: string;
  group: IGroupApiResponse;
  foods: IFood[];
}

/**
 * Interface representing the API response for multiple containers.
 * @property containers - Array of container objects.
 */
interface IContainersResponse {
  containers: IContainerApiResponse[];
}

/**
 * Converting a Container object from the Backend API to a front Interface
 * @param containers - array of containers with Backend API schema
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
 * @param id - groupId
 * @returns Array of IContainer object
 */
export const fetchContainerList = async (id: string): Promise<IContainer[]> => {
  try {
    const data: IContainersResponse = await request<IContainersResponse>({
      url: BACKEND_API_DOMAIN + '/groups/' + id + '/containers',
      method: 'GET',
    });
    return convertApiResponseContainers(data.containers);
  } catch (err) {
    throw new Error('API response is invalid'); // TODO: display error page
  }
};

/**
 * Fetch an array of containers associated with a logged-in user.
 * @returns Array of IContainer object
 */
export const fetchAllContainerList = async (): Promise<IContainer[]> => {
  try {
    const data: IContainersResponse = await request<IContainersResponse>({
      url: BACKEND_API_DOMAIN + '/containers',
      method: 'GET',
    });
    return convertApiResponseContainers(data.containers);
  } catch (err) {
    throw new Error('API response is invalid'); // TODO: display error page
  }
};
