import { MobileLayout } from '@/components/layouts/MobileLayout';
import { HeaderBackButton } from '@/components/parts/Header';
import { ContainerCardList } from '@/features/groups/components/ContainerCardList';
import { GroupSingleHeaderDropdownMenu } from '@/features/groups/components/GroupSingleHeaderDropdownMenu';
import { MemberList } from '@/features/groups/components/MemberList';
import { getGroup } from '@/lib/api/group/server';
import { IGroup } from '@/types/definition';

interface IGroupSinglePageProps {
  /**
   * The ID of the group to display.
   */
  groupId: IGroup['id'];
}

export const GroupSinglePage = async ({ groupId }: IGroupSinglePageProps) => {
  const group = await getGroup(groupId);

  return (
    <MobileLayout
      heading={group.name}
      headerLeft={<HeaderBackButton href={{ pathname: '/groups' }} />}
      headerRight={
        <GroupSingleHeaderDropdownMenu groupId={groupId} currentGroupName={group.name} />
      }
    >
      <div className="px-4 pt-6 pb-16">
        <MemberList groupId={groupId} />
        <ContainerCardList groupId={groupId} />
      </div>
    </MobileLayout>
  );
};
