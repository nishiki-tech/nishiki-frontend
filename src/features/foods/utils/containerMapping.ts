import { IContainer } from '@/types/definition';

export const groupContainersByGroupId = (data: IContainer[]): Record<string, string[]> => {
  return data.reduce(
    (acc, { groupId, id }) => ({
      ...acc,
      [groupId]: acc[groupId] ? [...acc[groupId], id] : [id],
    }),
    {} as Record<string, string[]>,
  );
};

export const createContainerIdNameMap = (data: IContainer[]): { [key: string]: string } => {
  const idNameMap: { [key: string]: string } = {};
  data.forEach((container) => {
    idNameMap[container.id] = container.name;
  });
  return idNameMap;
};

export const createGroupIdNameMap = (data: IContainer[]): { [key: string]: string } => {
  const groupIdGroupNameMap: { [key: string]: string } = {};
  data.forEach((container) => {
    if (!groupIdGroupNameMap[container.groupId]) {
      groupIdGroupNameMap[container.groupId] = container.groupName;
    }
  });
  return groupIdGroupNameMap;
};
