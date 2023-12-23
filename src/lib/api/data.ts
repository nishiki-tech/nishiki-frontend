import { IContainer, IFood, IGroup, IUser } from '@/types/definition';

import axios from 'axios';

const APIDOMAIN = 'http://localhost:8080';

interface IGroupApiResponse {
  groupId: string;
  groupName: string;
}

interface IGroupsResponse {
  groups: IGroupApiResponse[];
}

interface IContainerApiResponse {
  id: string;
  name: string;
  group: IGroupApiResponse;
  foods: IFood[];
}

interface IContainersResponse {
  containers: IContainerApiResponse[];
}

interface IUsersResponse {
  users: IUser[];
}

function convertApiResponsContainers(containers: IContainerApiResponse[]): IContainer[] {
  return containers.map((container: IContainerApiResponse) => ({
    ...container,
    group: {
      id: container.group.groupId,
      name: container.group.groupName,
    },
  }));
}

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

export async function fetchContainerList(groupId: string): Promise<IContainer[]> {
  try {
    const res = await axios.get<IContainersResponse>(
      APIDOMAIN + '/groups/' + groupId + '/containers',
    );
    return convertApiResponsContainers(res.data.containers);
  } catch (err) {
    throw new Error('API response is invalid');
  }
}

export async function fetchAllContainerList(): Promise<IContainer[]> {
  try {
    const res = await axios.get<IContainersResponse>(APIDOMAIN + '/containers');
    return convertApiResponsContainers(res.data.containers);
  } catch (err) {
    throw new Error('API response is invalid');
  }
}

export async function fetchUserList(groupId: string): Promise<IUser[]> {
  try {
    const res = await axios.get<IUsersResponse>(APIDOMAIN + '/groups/' + groupId + '/users');
    return res.data.users;
  } catch (err) {
    throw new Error('API response is invalid');
  }
}
