export interface Group {
  groupId: string;
  groupName: string;
}

export interface User {
  id: string;
  name: string;
}

export interface Container {
  id: string;
  name: string;
  group: string;
  food: Food;
}

export interface Food {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  expiry: Date;
}
