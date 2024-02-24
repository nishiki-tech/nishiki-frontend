import { FoodsPage } from '@/components/page/FoodsPage';
import { fetchAllContainerList } from '@/lib/api/container/server';
import { IContainer } from '@/types/definition';

export const dynamic = 'force-dynamic';

export default async function Foods() {
  const containers: IContainer[] = await fetchAllContainerList();
  return <FoodsPage containers={containers} />;
}
