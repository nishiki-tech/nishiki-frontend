import { z } from 'zod';

/**
 * The schema for the user's inputs to validate the inputs when creating a food.
 */
export const createFoodFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  group: z
    .string()
    .min(1, { message: 'Group must be selected' })
    .uuid({ message: 'Selected group is invalid' }),
  container: z
    .string()
    .min(1, { message: 'Container must be selected' })
    .uuid({ message: 'Selected container is invalid' }),
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
  id: z.string().uuid({ message: 'Food ID is invalid' }),
  name: z.string().min(1, { message: 'Name is required' }),
  group: z
    .string()
    .min(1, { message: 'Group must be selected' })
    .uuid({ message: 'Selected group is invalid' }),
  container: z
    .string()
    .min(1, { message: 'Container must be selected' })
    .uuid({ message: 'Selected container is invalid' }),
  quantity: z.string().optional(),
  unit: z.string().optional(),
  expiry: z.coerce.date().optional(),
  category: z.string().min(1, { message: 'Category must be selected' }),
});

/**
 * The type for the user's inputs to update a food.
 */
export type UpdateFoodInputs = z.infer<typeof updateFoodFormSchema>;

export const deleteFoodFormSchema = z.object({
  foodId: z.string().uuid({ message: 'Food ID is invalid' }),
  containerId: z.string().uuid({ message: 'Container ID is invalid' }),
});

export type DeleteFoodInputs = z.infer<typeof deleteFoodFormSchema>;
