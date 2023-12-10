import GroupList from '@/features/group/components/GroupList';
import { IGroup } from '@/features/group/types/definition';
import { fetchGroupList } from '@/lib/api/data';

import React from 'react';

export async function GroupsPage() {
  const groups: IGroup[] = await fetchGroupList();
  return (
    <div>
      GroupsPage
      <GroupList groups={groups} />
    </div>
  );
}
