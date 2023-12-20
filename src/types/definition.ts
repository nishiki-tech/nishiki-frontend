export interface IGroup {
  groupId: string;
  groupName: string;
}

export interface IUser {
  id: string;
  name: string;
}

export interface IContainer {
  id: string;
  name: string;
  group: string;
  foods: IFood[];
}

export interface IFood {
  id: string;
  name: string;
  quantity: number;
  category: string;
  unit: string;
  expiry: Date;
  createdAt: Date;
}
