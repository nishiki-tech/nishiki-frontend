/**
 * Group object
 * @property id - group id
 * @property name - group name
 */
export interface IGroup {
  id: string;
  name: string;
}

/**
 * User object
 * @property id - user id
 * @property id - user name
 */
export interface IUser {
  id: string;
  name: string;
}

/**
 * Container object
 * @property id - container id
 * @property name - container name
 * @property group - Group object
 * @property group - List of food object
 */
export interface IContainer {
  id: string;
  name: string;
  group: IGroup;
  foods: IFood[];
}

/**
 * Food object
 * @property id - food id
 * @property name - food name
 * @property quantity - quantity for this food
 * @property category - food category. Each food has only one category.
 * @property unit - unit of a food (kg/bottle etc)
 * @property expiry - expiry date of a food
 */
export interface IFood {
  id: string;
  name: string;
  quantity: number;
  category: string;
  unit: string | null;
  expiry: Date | null;
  createdAt: Date;
}
