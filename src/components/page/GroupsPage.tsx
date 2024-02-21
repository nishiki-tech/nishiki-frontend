import { MobileLayout } from '@/components/layouts/MobileLayout';
import { CreateGroupButton, GroupCardList } from '@/features/groups/components';

export const GroupsPage = () => {
  return (
    <MobileLayout>
      <div className="pt-6 px-4 pb-2 flex flex-col gap-2">
        <div className="h-12 w-full flex items-center justify-end">
          <CreateGroupButton />
        </div>
        <GroupCardList />
      </div>
    </MobileLayout>
  );
};
