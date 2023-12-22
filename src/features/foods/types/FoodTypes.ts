import { IFood } from '@/types/definition';

export interface IFoodView extends IFood {
  container: string;
}
export type GroupIdContainersMapType = Record<string, string[]>;
export type IdNameMapType = { [key: string]: string };
