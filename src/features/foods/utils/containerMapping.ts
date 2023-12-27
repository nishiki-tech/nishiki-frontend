import { IContainer } from '@/types/definition';

import { GroupIdContainersMapType } from '../types/FoodTypes';
import { IdNameMapType } from '../types/FoodTypes';

/**
 * Create a map object containing an array of container ids per group id
 * @param containers Array of IContainer object
 * @returns GroupIdContainersMapType
 */
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

/**
 * Create an object with a pair of container id and container name from array of IContainer object
 * @param containers List of IContainer object
 * @returns Container id/name pair object
 */
export const createContainerIdNameMap = (containers: IContainer[]): ContainerIdNameMapType => {
  const idNameMap: { [key: string]: string } = {};
  containers.forEach((c) => {
    idNameMap[c.id] = c.name;
  });
  return idNameMap;
};

type GroupIdNameMapType = IdNameMapType;
/**
 * Create an object with a pair of group id and group name from array of IContainer object
 * @param containers
 * @returns Group id/name pair object
 */
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

/**
 * Create an object that maps container id to group id from array of IContainer object
 * @param containers Array of IContainer object
 * @returns ContainerId/GroupId pair object
 */
export const createContainerIdGroupIdMap = (
  containers: IContainer[],
): ContainerIdGroupIdMapType => {
  const containerIdGroupIdMap: ContainerIdGroupIdMapType = {};
  containers.forEach((container) => {
    containerIdGroupIdMap[container.id] = container.group.id;
  });
  return containerIdGroupIdMap;
};
