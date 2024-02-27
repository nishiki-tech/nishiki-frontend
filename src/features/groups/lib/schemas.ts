import { z } from 'zod';

export const createGroupFormSchema = z.object({
  groupName: z.string().min(1, { message: 'Name is required' }),
});

export type CreateGroupInputs = z.infer<typeof createGroupFormSchema>;

export const renameGroupFormSchema = z.object({
  groupName: z.string().min(1, { message: 'Name is required' }),
});

export type RenameGroupInputs = z.infer<typeof renameGroupFormSchema>;

export const createContainerFormSchema = z.object({
  containerName: z.string().min(1, { message: 'Name is required' }),
});

export type CreateContainerInputs = z.infer<typeof createContainerFormSchema>;

export const deleteMemberSchema = z.object({
  groupId: z.string().uuid({ message: 'Group ID is invalid' }),
  userId: z.string().uuid({ message: 'User ID is invalid' }),
});
