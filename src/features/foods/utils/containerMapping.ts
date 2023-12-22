import { IContainer } from '@/types/definition';

import { GroupIdContainersMapType } from '../types/FoodTypes';
import { IdNameMapType } from '../types/FoodTypes';

export const groupContainersByGroupId = (containers: IContainer[]): GroupIdContainersMapType => {
  return containers.reduce(
    (acc, { groupId, id }) => ({
      ...acc,
      [groupId]: acc[groupId] ? [...acc[groupId], id] : [id],
    }),
    {} as GroupIdContainersMapType,
  );
};

export const createContainerIdNameMap = (containers: IContainer[]): IdNameMapType => {
  const idNameMap: { [key: string]: string } = {};
  containers.forEach((c) => {
    idNameMap[c.id] = c.name;
  });
  return idNameMap;
};

export const createGroupIdNameMap = (containers: IContainer[]): IdNameMapType => {
  const groupIdGroupNameMap: { [key: string]: string } = {};
  containers.forEach((c) => {
    if (!groupIdGroupNameMap[c.groupId]) {
      groupIdGroupNameMap[c.groupId] = c.groupName;
    }
  });
  return groupIdGroupNameMap;
};
