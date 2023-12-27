import { GroupCardList, GroupCollectionLayout } from '@/features/groups/components/base/layouts';
import { IGroup } from '@/types/definition';

import { FC } from 'react';

interface IGroupsPageProps {
  groups: IGroup[];
}

export const GroupsPage: FC<IGroupsPageProps> = ({ groups }) => {
  return (
    <>
      <GroupCollectionLayout>
        <GroupCardList groups={groups} />
      </GroupCollectionLayout>
    </>
  );
};
