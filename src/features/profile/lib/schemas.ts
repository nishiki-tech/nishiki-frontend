import { z } from 'zod';

export const renameUserFormSchema = z.object({
  userName: z.string().min(1, { message: 'Name is required' }),
});

export type RenameUserInputs = z.infer<typeof renameUserFormSchema>;
