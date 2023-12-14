import { ContainerList } from '@/features/groups/components/ContainerList';
import { MemberList } from '@/features/groups/components/MemberList';

export const GroupSinglePage = ({ id }: { id: string }) => {
  return (
    <>
      <MemberList id={id} />
      <ContainerList id={id} />
    </>
  );
};
