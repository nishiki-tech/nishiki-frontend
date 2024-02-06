import { z } from 'zod';

export const foodFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  group: z.string().min(1, { message: 'Group is required' }),
  container: z.string().min(1, { message: 'Container is required' }),
  quantity: z.string(),
  unit: z.string().optional(),
  expiry: z.coerce.date().optional(),
  category: z.string(),
});

export const defaultValues = {
  name: '',
  group: '',
  container: '',
  quantity: '',
  unit: '',
  expiry: undefined,
  category: 'unselected',
};

export type FoodInputs = z.infer<typeof foodFormSchema>;
