import { foodFormSchema, FoodInputs } from '@/features/foods/lib/schema';
import { FoodPostRequestBody, postFood } from '@/lib/api/container/client';

import { Err, Ok, Result } from 'result-ts-type';

const CreateFoodFormSchema = foodFormSchema.omit({ group: true, container: true });

export const createFood = async (inputs: FoodInputs): Promise<Result<undefined, undefined>> => {
  const validatedData = CreateFoodFormSchema.safeParse(inputs);
  if (!validatedData.success) return Err(undefined);

  const newFood: FoodPostRequestBody = {
    name: validatedData.data.name,
    quantity: Number(validatedData.data.quantity) || null,
    unit: validatedData.data.unit || null,
    expiry: validatedData.data.expiry || null,
    category: validatedData.data.category,
  };

  const result = await postFood(inputs.container, newFood);

  if (result.ok) return Ok(undefined);
  return Err(undefined);
};
