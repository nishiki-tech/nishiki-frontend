import {
  createFoodFormSchema,
  CreateFoodInputs,
  UpdateFoodInputs,
} from '@/features/foods/lib/schema';
import {
  FoodPostRequestBody,
  FoodPutRequestBody,
  postFood,
  putFood,
} from '@/lib/api/container/client';

import { Err, Ok, Result } from 'result-ts-type';

const CreateFoodFormSchema = createFoodFormSchema.omit({ group: true, container: true });

export const createFood = async (inputs: CreateFoodInputs): Promise<Result<undefined, string>> => {
  const validatedData = CreateFoodFormSchema.safeParse(inputs);
  if (!validatedData.success) return Err('Validation failed');

  const newFood: FoodPostRequestBody = {
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

export const updateFood = async (inputs: UpdateFoodInputs): Promise<Result<undefined, string>> => {
  const validatedData = createFoodFormSchema.safeParse(inputs);
  if (!validatedData.success) return Err('Validation failed');

  const alteredFood: FoodPutRequestBody = {
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
