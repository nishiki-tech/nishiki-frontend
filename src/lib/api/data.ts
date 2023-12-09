import { Group } from '@/features/group/types/definition';
import { Container } from '@/features/group/types/definition';
import { User } from '@/features/group/types/definition';

import axios from 'axios';

const APIDOMAIN = 'http://localhost:8080';

interface IGroupsResponse {
  groups: Group[];
}

interface IContainersResponse {
  containers: Container[];
}

interface IUsersResponse {
  users: User[];
}

export async function fetchGroupList(): Promise<Group[]> {
  try {
    const res = await axios.get<IGroupsResponse>(APIDOMAIN + '/groups');
    return res.data.groups;
  } catch (err) {
    throw new Error('API response is invalid');
  }
}

export async function fetchContainerList(groupId: string): Promise<Container[]> {
  try {
    const res = await axios.get<IContainersResponse>(
      APIDOMAIN + '/groups/' + groupId + '/containers',
    );
    return res.data.containers;
  } catch (err) {
    throw new Error('API response is invalid');
  }
}

export async function fetchUserList(groupId: string): Promise<User[]> {
  try {
    const res = await axios.get<IUsersResponse>(APIDOMAIN + '/groups/' + groupId + '/users');
    return res.data.users;
  } catch (err) {
    throw new Error('API response is invalid');
  }
}
