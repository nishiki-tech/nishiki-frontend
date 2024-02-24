import { z } from 'zod';

/**
 * The schema for the user's inputs to validate the inputs when creating a food.
 */
export const createFoodFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  group: z.string().min(1, { message: 'Group is required' }),
  container: z.string().min(1, { message: 'Container is required' }),
  quantity: z.string().optional(),
  unit: z.string().optional(),
  expiry: z.coerce.date().optional(),
  category: z.string().min(1, { message: 'Category must be selected' }),
});

/**
 * The type for the user's inputs to create a food.
 */
export type CreateFoodInputs = z.infer<typeof createFoodFormSchema>;

/**
 * The default values for the user's inputs before the user interacts with the form.
 */
export const createFoodDefaultValues: CreateFoodInputs = {
  name: '',
  group: '',
  container: '',
  quantity: '',
  unit: '',
  expiry: undefined,
  category: 'unselected',
};

/**
 * The schema for the user's inputs to validate the inputs when updating a food.
 */
export const updateFoodFormSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: 'Name is required' }),
  group: z.string().min(1, { message: 'Group is required' }),
  container: z.string().min(1, { message: 'Container is required' }),
  quantity: z.string().optional(),
  unit: z.string().optional(),
  expiry: z.coerce.date().optional(),
  category: z.string().min(1, { message: 'Category must be selected' }),
});

/**
 * The type for the user's inputs to update a food.
 */
export type UpdateFoodInputs = z.infer<typeof updateFoodFormSchema>;
