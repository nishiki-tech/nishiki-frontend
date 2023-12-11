import { Card, CardContent, CardDescription } from '@/components/ui';
import { Icon } from '@/components/ui';
import { fetchContainerList } from '@/lib/api/data';

import { IContainer } from '../types/definition';
export default async function ContainerList({ id }: { id: string }) {
  const containers: IContainer[] = await fetchContainerList(id);
  return (
    <>
      Container
      {/* <MenuMeatBall /> */}
      {/* <MenuPlus /> */}
      {containers.map((container) => (
        <Card key={container.id}>
          <CardContent>
            <div className="flex items-center justify-center bg-accent rounded-full w-12 h-12">
              <Icon iconName="container" color="black" />
            </div>
            <CardDescription>{container.name}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
