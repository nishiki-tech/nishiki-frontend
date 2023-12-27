/**
 * Group object
 * @property {string} id - group id
 * @property {string} name - group name
 */
export interface IGroup {
  id: string;
  name: string;
}

/**
 * User object
 * @property {string} id - user id
 * @property {string} id - user name
 */
export interface IUser {
  id: string;
  name: string;
}

/**
 * Container object
 * @property {string} id - container id
 * @property {string} name - container name
 * @property {string} group - Group object
 * @property {string} group - List of food object
 */
export interface IContainer {
  id: string;
  name: string;
  group: IGroup;
  foods: IFood[];
}

/**
 * Food object
 * @property {string} id - food id
 * @property {string} name - food name
 * @property {number} quantity - quantity for this food
 * @property {string} category - food category. Each food has only one category.
 * @property {string} unit - unit of a food (kg/bottle etc)
 * @property {Date} expiry - expiry date of a food
 */
export interface IFood {
  id: string;
  name: string;
  quantity: number;
  category: string;
  unit: string;
  expiry: Date;
  createdAt: Date;
}
