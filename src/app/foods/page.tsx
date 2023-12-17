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
    filter?: string;
  };
}) {
  const containers: IContainer[] = await fetchAllContainerList();
  return <FoodsPage containers={containers} searchParams={searchParams} />;
}
