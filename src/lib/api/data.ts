import { IContainer, IGroup, IUser } from '@/types/definition';

import axios from 'axios';

let APIDOMAIN = 'http://localhost:8080';

interface IGroupsResponse {
  groups: IGroup[];
}

interface IContainersResponse {
  containers: IContainer[];
}

interface IUsersResponse {
  users: IUser[];
}

export async function fetchGroupList(): Promise<IGroup[]> {
  try {
    const res = await axios.get<IGroupsResponse>(APIDOMAIN + '/groups');
    return res.data.groups;
  } catch (err) {
    throw new Error('API response is invalid');
  }
}

export async function fetchContainerList(groupId: string): Promise<IContainer[]> {
  try {
    const res = await axios.get<IContainersResponse>(
      APIDOMAIN + '/groups/' + groupId + '/containers',
    );
    return res.data.containers;
  } catch (err) {
    throw new Error('API response is invalid');
  }
}

export function fetchAllContainerList(): Promise<IContainer[]> {
  APIDOMAIN = 'http://localhost:8001';
  return axios
    .get<IContainersResponse>(APIDOMAIN + '/containers')
    .then((res) => res.data.containers)
    .catch((err) => {
      throw new Error('API response is invalid', err);
    });
}

export async function fetchUserList(groupId: string): Promise<IUser[]> {
  try {
    const res = await axios.get<IUsersResponse>(APIDOMAIN + '/groups/' + groupId + '/users');
    return res.data.users;
  } catch (err) {
    throw new Error('API response is invalid');
  }
}
