import { IContainer } from '@/types/definition';

import { GroupIdContainersMapType } from '../types/FoodTypes';
import { IdNameMapType } from '../types/FoodTypes';

type ContainerIdNameMapType = IdNameMapType;
type GroupIdNameMapType = IdNameMapType;

/**
 * Create a map object containing a array of container ids per group id
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
