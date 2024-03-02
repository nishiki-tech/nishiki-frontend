import { fetchContainerList } from '@/lib/api/container/server';
import { IContainer, IGroup } from '@/types/definition';

import { ContainerCard } from './ContainerCard';
import { CreateContainerButton } from './CreateContainerButton';

interface IContainerListProps {
  /**
   * an identifier of a group which a list of containers belongs to
   */
  groupId: IGroup['id'];
}

export const ContainerCardList = async ({ groupId }: IContainerListProps) => {
  const containers: IContainer[] = await fetchContainerList(groupId);

  return (
    <>
      <div className="flex items-center justify-between mb-2 h-12">
        <h2 className="text-xl">Container</h2>
        <div className="flex gap-0.5">
          <CreateContainerButton groupId={groupId} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {containers.map((container) => (
          <ContainerCard
            key={container.id}
            containerId={container.id}
            groupId={groupId}
            containerName={container.name}
          />
        ))}
      </div>
    </>
  );
};
