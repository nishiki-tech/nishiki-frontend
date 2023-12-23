import { IContainer, IFood } from '@/types/definition';

export interface IFoodView extends IFood {
  container: string;
}
export type GroupIdContainersMapType = Record<IContainer['groupId'], IContainer['id'][]>;
export type IdNameMapType = Record<IContainer['groupId'], IContainer['id']>;
