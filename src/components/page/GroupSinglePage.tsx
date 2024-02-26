import { MobileLayout } from '@/components/layouts/MobileLayout';
import { HeaderBackButton, HeaderMenuCircleButton } from '@/components/parts/Header';
import { ContainerList } from '@/features/groups/components/ContainerList';
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
      headerRight={<HeaderMenuCircleButton />}
    >
      <div className="px-4 pt-6 pb-16">
        <MemberList id={groupId} />
        <ContainerList id={groupId} />
      </div>
    </MobileLayout>
  );
};
