'use server';
import { createGroup } from '@/lib/api';

/**
 *
 * Server action to create a new group.
 * @param {string} groupName
 * @returns {Promise<void>}
 */
export async function createGroupAction(groupName: string) {
  return await createGroup({ groupName });
}
