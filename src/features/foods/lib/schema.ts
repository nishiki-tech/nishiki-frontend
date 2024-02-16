import { z } from 'zod';

export const createFoodFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  group: z.string().min(1, { message: 'Group is required' }),
  container: z.string().min(1, { message: 'Container is required' }),
  quantity: z.string().optional(),
  unit: z.string().optional(),
  expiry: z.coerce.date().optional(),
  category: z.string().min(1, { message: 'Category must be selected' }),
});

export type CreateFoodInputs = z.infer<typeof createFoodFormSchema>;

export const createFoodDefaultValues: CreateFoodInputs = {
  name: '',
  group: '',
  container: '',
  quantity: '',
  unit: '',
  expiry: undefined,
  category: 'unselected',
};

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

export type UpdateFoodInputs = z.infer<typeof updateFoodFormSchema>;
