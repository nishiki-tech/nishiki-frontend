import GroupList from '@/features/group/components/GroupList';
import { Group } from '@/features/group/types/definition';
import { fetchGroupList } from '@/lib/api/data';

import React from 'react';

const groups: Group[] = await fetchGroupList();

export function GroupsPage() {
  return (
    <div>
      GroupsPage
      <GroupList groups={groups} />
    </div>
  );
}
