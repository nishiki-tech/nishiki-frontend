import { SortMode } from '@/features/foods/types/utils';

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export const FoodSort = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSort = (term: string) => {
    console.log(`Sort... ${term}`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('sort', term);
    } else {
      params.delete('sort');
    }
    replace(`${pathname}?${params.toString()}` as Route);
  };
  return (
    <div>
      Sort
      <button onClick={() => handleSort(SortMode.NAME)}> SortMode.NAME </button>
      <br />
      <button onClick={() => handleSort(SortMode.EXPIRY)}> SortMode.EXPIRY </button>
      <br />
      <button onClick={() => handleSort(SortMode.CREATED_AT)}> SortMode.CREATED_AT </button>
    </div>
  );
};
