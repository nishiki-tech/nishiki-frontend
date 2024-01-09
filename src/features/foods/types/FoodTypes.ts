import { IContainer, IFood } from '@/types/definition';

/**
 * Food object for food view
 * @property {string} container - container name
 */
export interface IFoodView extends IFood {
  containerId: IContainer['id'];
}

/**
 * A type that maps an array of container ids corresponding to each group id.
 * 'IContainer' here is an interface representing a container, and,
 * Each container has a 'group' property, which contains the id of its group.
 * This map shows which containers are associated with each group id.
 * Example: { "groupId1": ["containerId1", "containerId2"], "groupId2": ["containerId3"] }
 */
export type GroupIdContainersMapType = Record<IContainer['group']['id'], IContainer['id'][]>;

/**
 * A type that represents a mapping between ids and names in a string.
 * This map stores the name corresponding to each id.
 */
export type IdNameMapType = Record<string, string>;
