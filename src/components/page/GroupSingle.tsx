import { MobileLayout } from '@/components/layouts/MobileLayout';
import { HeaderBackButton, HeaderMenuCircleButton } from '@/components/parts/Header';
import { ContainerCardList } from '@/features/groups/components/ContainerCardList';
import { MemberList } from '@/features/groups/components/MemberList';

export const GroupSinglePage = ({ groupId }: { groupId: string }) => {
  return (
    <MobileLayout
      heading="Group Name"
      headerLeft={<HeaderBackButton href={{ pathname: '/groups' }} />}
      headerRight={<HeaderMenuCircleButton />}
    >
      <div className="px-4 pt-6 pb-16">
        <MemberList id={groupId} />
        <ContainerCardList groupId={groupId} />
      </div>
    </MobileLayout>
  );
};
