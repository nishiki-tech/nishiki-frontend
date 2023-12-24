import { IContainer } from '@/types/definition';

import { GroupIdContainersMapType } from '../types/FoodTypes';
import { IdNameMapType } from '../types/FoodTypes';

export const groupContainersByGroupId = (containers: IContainer[]): GroupIdContainersMapType => {
  return containers.reduce(
    (acc, { group, id }) => ({
      ...acc,
      [group.id]: acc[group.id] ? [...acc[group.id], id] : [id],
    }),
    {} as GroupIdContainersMapType,
  );
};

type ContainerIdNameMapType = IdNameMapType;
type GroupIdNameMapType = IdNameMapType;

export const createContainerIdNameMap = (containers: IContainer[]): ContainerIdNameMapType => {
  const idNameMap: { [key: string]: string } = {};
  containers.forEach((c) => {
    idNameMap[c.id] = c.name;
  });
  return idNameMap;
};

export const createGroupIdNameMap = (containers: IContainer[]): GroupIdNameMapType => {
  const groupIdGroupNameMap: { [key: string]: string } = {};
  containers.forEach((c) => {
    if (!groupIdGroupNameMap[c.group.id]) {
      groupIdGroupNameMap[c.group.id] = c.group.name;
    }
  });
  return groupIdGroupNameMap;
};
