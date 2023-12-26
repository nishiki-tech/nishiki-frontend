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

export const createContainerIdNameMap = (containers: IContainer[]): ContainerIdNameMapType => {
  const idNameMap: { [key: string]: string } = {};
  containers.forEach((c) => {
    idNameMap[c.id] = c.name;
  });
  return idNameMap;
};

type GroupIdNameMapType = IdNameMapType;

export const createGroupIdNameMap = (containers: IContainer[]): GroupIdNameMapType => {
  const groupIdGroupNameMap: { [key: string]: string } = {};
  containers.forEach((c) => {
    if (!groupIdGroupNameMap[c.group.id]) {
      groupIdGroupNameMap[c.group.id] = c.group.name;
    }
  });
  return groupIdGroupNameMap;
};

type ContainerIdGroupIdMapType = IdNameMapType;

export const createContainerIdGroupIdMap = (
  containers: IContainer[],
): ContainerIdGroupIdMapType => {
  const containerIdGroupIdMap: ContainerIdGroupIdMapType = {};
  containers.forEach((container) => {
    containerIdGroupIdMap[container.id] = container.group.id;
  });
  return containerIdGroupIdMap;
};
