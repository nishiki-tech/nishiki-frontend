import { GroupList } from '@/features/groups/components/GroupList';
import { fetchGroupList } from '@/lib/api/data';
import { IGroup } from '@/types/definition';

import React from 'react';

export async function GroupsPage() {
  const groups: IGroup[] = await fetchGroupList();
  return (
    <>
      GroupsPage
      <GroupList groups={groups} />
    </>
  );
}
