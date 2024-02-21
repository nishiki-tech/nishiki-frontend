import { MobileLayout } from '@/components/layouts/MobileLayout';
import { ContainerList } from '@/features/groups/components/ContainerList';
import { MemberList } from '@/features/groups/components/MemberList';

export const GroupSinglePage = ({ id }: { id: string }) => {
  return (
    <MobileLayout>
      <div className="px-4 pt-6 pb-16">
        <MemberList id={id} />
        <ContainerList id={id} />
      </div>
    </MobileLayout>
  );
};
