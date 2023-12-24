'use client';

import { ContentListHeader } from '@/features/groups/components/base/parts';
import { GroupList } from '@/features/groups/components/GroupList';
import { IGroup } from '@/types/definition';

import { FC } from 'react';

interface IGroupsPageProps {
  groups: IGroup[];
}

export const GroupsPage: FC<IGroupsPageProps> = ({ groups }) => {
  const onMenuButtonClick = () => {};
  const onPlusButtonClick = () => {};
  return (
    <>
      <ContentListHeader
        onMenuButtonClick={onMenuButtonClick}
        onPlusButtonClick={onPlusButtonClick}
      />
      <GroupList groups={groups} />
    </>
  );
};
