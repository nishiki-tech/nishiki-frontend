import { request } from '.';

const BACKEND_API_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_API_DOMAIN || '';

export interface ICreateGroupParams {
  groupName: string;
}

export interface ICreateGroupApiResponse {
  groupId: string;
}

/**
 * Create a new group.
 * @param name The name of the new group.
 * @returns The ID of the newly created group.
 */
export const createGroup = async (params: ICreateGroupParams): Promise<string> => {
  try {
    const data: ICreateGroupApiResponse = await request<ICreateGroupApiResponse>({
      url: BACKEND_API_DOMAIN + '/groups',
      method: 'POST',
      body: JSON.stringify(params),
    });
    return data.groupId;
  } catch (err) {
    throw new Error(`API response is invalid ${err}`);
  }
};
