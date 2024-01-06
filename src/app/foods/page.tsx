import { FoodsPage } from '@/components/page/FoodsPage';
import { fetchAllContainerList } from '@/lib/api';
import { IContainer } from '@/types/definition';

export default async function Foods() {
  const containers: IContainer[] = await fetchAllContainerList();
  return <FoodsPage containers={containers} />;
}
