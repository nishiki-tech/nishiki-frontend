import {
  createFoodFormSchema,
  CreateFoodInputs,
  deleteFoodFormSchema,
  UpdateFoodInputs,
} from '@/features/foods/lib/schema';
import {
  IPostFoodRequestBody,
  IPutFoodRequestBody,
  postFood,
  putFood,
} from '@/lib/api/container/client';
import { deleteFood } from '@/lib/api/container/client';
import { IContainer, IFood } from '@/types/definition';

import { Err, Ok, Result } from 'result-ts-type';

const CreateFoodFormSchema = createFoodFormSchema.omit({ group: true, container: true });

/**
 * Validate the inputs and call the API client to create a new food
 * @param inputs - The raw inputs to be validated
 * @returns undefined on success, or an error message if the validation or request fails
 */
export const createFood = async (inputs: CreateFoodInputs): Promise<Result<undefined, string>> => {
  const validatedData = CreateFoodFormSchema.safeParse(inputs);
  if (!validatedData.success) return Err('Validation failed');

  const newFood: IPostFoodRequestBody = {
    name: validatedData.data.name,
    quantity: Number(validatedData.data.quantity) || null,
    unit: validatedData.data.unit || null,
    expiry: validatedData.data.expiry || null,
    category: validatedData.data.category,
  };

  const result = await postFood(inputs.container, newFood);

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};

/**
 * Validate the inputs and call the API client to update a food
 * @param inputs - The raw inputs to be validated
 * @returns undefined on success, or an error message if the validation or request fails
 */
export const updateFood = async (inputs: UpdateFoodInputs): Promise<Result<undefined, string>> => {
  const validatedData = createFoodFormSchema.safeParse(inputs);
  if (!validatedData.success) return Err('Validation failed');

  const alteredFood: IPutFoodRequestBody = {
    name: validatedData.data.name,
    quantity: Number(validatedData.data.quantity) || null,
    unit: validatedData.data.unit || null,
    expiry: validatedData.data.expiry || null,
    category: validatedData.data.category,
  };

  const result = await putFood(inputs.container, inputs.id, alteredFood);

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};

/**
 * Call the API client to remove a food
 * @param containerId - The ID of the container to remove the food from
 * @param foodId - The ID of the food to be removed
 * @returns undefined on success, or an error message if the request fails
 */
export const removeFood = async (
  containerId: IContainer['id'],
  foodId: IFood['id'],
): Promise<Result<undefined, string>> => {
  const validatedData = deleteFoodFormSchema.safeParse({ foodId, containerId });
  if (!validatedData.success) return Err('Validation failed');

  const result = await deleteFood(containerId, foodId);

  if (result.ok) return Ok(undefined);
  return Err(result.error);
};
