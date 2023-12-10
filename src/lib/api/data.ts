import { IGroup } from '@/features/group/types/definition';
import { IContainer } from '@/features/group/types/definition';
import { IUser } from '@/features/group/types/definition';

import axios from 'axios';

const APIDOMAIN = 'http://localhost:8080';

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

export async function fetchUserList(groupId: string): Promise<IUser[]> {
  try {
    const res = await axios.get<IUsersResponse>(APIDOMAIN + '/groups/' + groupId + '/users');
    return res.data.users;
  } catch (err) {
    throw new Error('API response is invalid');
  }
}
