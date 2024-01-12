'use server';
import { createGroup } from '@/lib/api';

export async function createGroupAction({ groupName }: { groupName: string }) {
  await createGroup({ groupName });
}
