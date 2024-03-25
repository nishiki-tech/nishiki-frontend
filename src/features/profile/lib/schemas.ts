import { z } from 'zod';

export const renameUserFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
});

export type RenameUserInputs = z.infer<typeof renameUserFormSchema>;

export const deleteUserFormSchema = z.object({
  userId: z.string().uuid({ message: 'User ID is invalid' }),
});
