import { request } from '@/lib/api/common/client';
import { IContainer, IFood, IGroup } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

/**
 * The object to be sent to the API as the request body for creating a new food
 */
export interface IPostFoodRequestBody {
  name: string;
  quantity: number | null;
  unit: string | null;
  expiry: Date | null;
  category: string;
}

/**
 * The object to be returned from the API when a new food is created
 */
export interface IPostFoodResponse {
  /**
   * The ID of the newly created food
   */
  foodId: IFood['id'];
}

/**
 * Send a request to the API to create a new food
 * @param containerId - The ID of the container to create the new food in
 * @param requestBody - The object to be sent to the API as the request body
 * @returns A {@link IPostFoodResponse} object on success, or an error message if the request fails
 */
export const postFood = async (
  containerId: IContainer['id'],
  requestBody: IPostFoodRequestBody,
): Promise<Result<IPostFoodResponse, string>> => {
  try {
    const res = await request<IPostFoodResponse>({
      url: `${API_BASE_URL}/containers/${containerId}/foods`,
      method: 'POST',
      options: {
        body: JSON.stringify(requestBody),
      },
    });
    return Ok({ foodId: res.foodId });
  } catch (err) {
    if (err instanceof Error) {
      return Err(err.message);
    }
    return Err('API response is invalid');
  }
};

/**
 * The object to be sent to the API as the request body for updating a food
 */
export interface IPutFoodRequestBody extends IPostFoodRequestBody {}

/**
 * Send a request to the API to update a food
 * @param containerId - The ID of the container to update the food in
 * @param foodId - The ID of the food to update
 * @param requestBody - The object to be sent to the API as the request body
 * @returns undefined on success, or an error message if the request fails
 */
export const putFood = async (
  containerId: IContainer['id'],
  foodId: IFood['id'],
  requestBody: IPutFoodRequestBody,
): Promise<Result<undefined, string>> => {
  try {
    await request({
      url: `${API_BASE_URL}/containers/${containerId}/foods/${foodId}`,
      method: 'PUT',
      options: {
        body: JSON.stringify(requestBody),
      },
    });
    return Ok(undefined);
  } catch (err) {
    if (err instanceof Error) {
      return Err(err.message);
    }
    return Err('API response is invalid');
  }
};

/**
 * Send a request to the API to delete a food
 * @param containerId - The ID of the container to delete the food from
 * @param foodId - The ID of the food to delete
 * @returns undefined on success, or an error message if the request fails
 */
export const deleteFood = async (
  containerId: IContainer['id'],
  foodId: IFood['id'],
): Promise<Result<undefined, string>> => {
  try {
    await request({
      url: `${API_BASE_URL}/containers/${containerId}/foods/${foodId}`,
      method: 'DELETE',
    });
    return Ok(undefined);
  } catch (err) {
    if (err instanceof Error) {
      return Err(err.message);
    }
    return Err('API response is invalid');
  }
};

export interface IPostContainerRequestBody {
  groupId: IGroup['id'];
  name: string;
}

export interface IPostContainerResponse {
  containerId: IContainer['id'];
}

export const postContainer = async (requestBody: IPostContainerRequestBody) => {
  try {
    const res = await request<IPostContainerResponse>({
      url: `${BACKEND_API_DOMAIN}/containers`,
      method: 'POST',
      options: {
        body: JSON.stringify(requestBody),
      },
    });
    return Ok({ containerId: res.containerId });
  } catch (err) {
    if (err instanceof Error) {
      return Err(err.message);
    }
    return Err('API response is invalid');
  }
};
