import { IFood } from '@/types/definition';

export const SortMode = {
  NAME: 'name',
  EXPIRY: 'expiry',
  CREATED_AT: 'created_at',
} as const;

export interface IFoodView extends IFood {
  container: string;
}
