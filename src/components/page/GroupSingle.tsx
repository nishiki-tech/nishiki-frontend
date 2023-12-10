import ContainerList from '@/features/group/components/ContainerList';
import MemberList from '@/features/group/components/MemberList';

export function GroupSinglePage({ id }: { id: string }) {
  return (
    <>
      <MemberList id={id} />
      <ContainerList id={id} />
    </>
  );
}
