import { request } from '@/lib/api/common/client';
import { IContainer, IFood } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

const BACKEND_API_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_API_DOMAIN || '';

export interface FoodPostRequestBody {
  name: string;
  quantity: number | null;
  unit: string | null;
  expiry: Date | null;
  category: string;
}

export const postFood = async (
  containerId: IContainer['id'],
  newFoodData: FoodPostRequestBody,
): Promise<Result<{ foodId?: IFood['id'] }, string>> => {
  try {
    const res = await request<{ foodId: IFood['id'] }>({
      url: `${BACKEND_API_DOMAIN}/containers/${containerId}/foods`,
      method: 'POST',
      options: {
        body: JSON.stringify(newFoodData),
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

export interface FoodPutRequestBody extends FoodPostRequestBody {}

export const putFood = async (
  containerId: IContainer['id'],
  foodId: IFood['id'],
  foodData: FoodPutRequestBody,
): Promise<Result<undefined, string>> => {
  try {
    await request({
      url: `${BACKEND_API_DOMAIN}/containers/${containerId}/foods/${foodId}`,
      method: 'PUT',
      options: {
        body: JSON.stringify(foodData),
      },
    });
    return Ok(undefined);
  } catch (err) {
    if (err instanceof Error) {
      // console.error(err.message);
      return Err(err.message);
    }
    return Err('API response is invalid');
  }
};
