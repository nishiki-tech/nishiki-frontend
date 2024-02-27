import { ContainerIcon, MenuKebabIcon } from '@/assets/images/icons';
import { Button, Card, Icon } from '@/components/ui';
import { fetchContainerList } from '@/lib/api/container/server';
import { IContainer, IGroup } from '@/types/definition';

import Link from 'next/link';

import { CreateContainerButton } from './CreateContainerButton';

interface IContainerListProps {
  /**
   * an identifier of a group which a list of containers belongs to
   */
  groupId: IGroup['id'];
}

export const ContainerList = async ({ groupId }: IContainerListProps) => {
  const containers: IContainer[] = await fetchContainerList(groupId);

  return (
    <>
      <div className="flex items-center justify-between mb-2 h-12">
        <h2 className="text-xl">Container</h2>
        <div className="flex gap-0.5">
          <CreateContainerButton groupId={groupId} />
        </div>
      </div>
      {containers.map((container) => (
        <Card key={container.id} className="flex justify-between gap-2">
          <Link
            href={`/foods?group=${groupId}&container=${container.id}`}
            className="flex grow gap-4 items-center pl-4 py-2"
          >
            <div className="flex items-center justify-center bg-accent rounded-full w-11 h-11">
              <Icon icon={ContainerIcon} color="black" size={6} />
            </div>
            <span className="leading-5">{container.name}</span>
          </Link>
          <Button variant="ghost" className="w-12">
            <Icon icon={MenuKebabIcon} size={4.5} />
          </Button>
        </Card>
      ))}
    </>
  );
};
