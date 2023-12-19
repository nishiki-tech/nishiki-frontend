import { FoodsPage } from '@/components/page/FoodsPage';
import { fetchAllContainerList } from '@/lib/api/data';
import { IContainer } from '@/types/definition';

export default async function Foods({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    sort?: string;
    container?: string;
    group?: string;
    category?: string;
  };
}) {
  const containers: IContainer[] = await fetchAllContainerList();
  return <FoodsPage containers={containers} searchParams={searchParams} />;
}
