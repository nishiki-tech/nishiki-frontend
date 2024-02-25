import { MobileLayout } from '@/components/layouts/MobileLayout';
import { HeaderBackButton } from '@/components/parts/Header';
import { InviteMemberDialog } from '@/features/groups/components/InviteMemberDialog';
import { MemberCardList } from '@/features/groups/components/MemberCardList';

interface IMembersPageProps {
  groupId: string;
}

export const MembersPage = async ({ groupId }: IMembersPageProps) => {
  return (
    <MobileLayout
      heading="Members"
      headerLeft={<HeaderBackButton href={{ pathname: `/groups/${groupId}` }} />}
    >
      <div className="px-4 py-6">
        <div className="flex items-center justify-end mb-2 h-12">
          <InviteMemberDialog groupId={groupId} />
        </div>
        <MemberCardList groupId={groupId} />
      </div>
    </MobileLayout>
  );
};
