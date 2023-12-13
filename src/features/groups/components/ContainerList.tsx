import { fetchContainerList } from '@/lib/api/data';

import { IContainer } from '../types/definition';

export const ContainerList = async ({ id }: { id: string }) => {
  const containers: IContainer[] = await fetchContainerList(id);
  return (
    <>
      Container
      {/* <MenuMeatBall /> */}
      {/* <MenuPlus /> */}
      {containers.map((container) => (
        <div key={container.id}>{container.name},</div>
      ))}
    </>
  );
};
