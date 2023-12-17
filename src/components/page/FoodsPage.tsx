'use client';
import { FoodFilter } from '@/features/foods/components/FoodFilter';
import { FoodList } from '@/features/foods/components/FoodList';
import { FoodSort } from '@/features/foods/components/FoodSort';
import { SearchBar } from '@/features/foods/components/SearchBar';
import { SortMode } from '@/features/foods/types/utils';
import { IContainer, IFood } from '@/types/definition';

import React, { useEffect, useState } from 'react';

export const FoodsPage = ({
  containers,
  searchParams,
}: {
  containers: IContainer[];
  searchParams?: {
    query?: string;
    page?: string;
    sort?: string;
    filter?: string;
  };
}) => {
  const [displayedFoods, setDisplayedFoods] = useState<IFood[]>([]);
  const query = searchParams?.query || '';
  const sort = searchParams?.sort || '';
  const filter = searchParams?.filter || '';
  const groups = containers.map((row) => row.group);
  const containerNames = containers.map((row) => row.name);

  useEffect(() => {
    const filteredContainers = containers.filter((row) => {
      if (filter === '') return true;
      return filter === row.group || filter === row.name;
    });
    const initialFoods = filteredContainers.flatMap((row) => row.foods);
    const filteredFoods = initialFoods.filter((food) => food.name.includes(query));
    const sortedFoods = [...filteredFoods].sort((a, b) => {
      switch (sort) {
        case SortMode.NAME:
          return a.name.localeCompare(b.name);
        case SortMode.EXPIRY:
          return a.expiry < b.expiry ? -1 : 1;
        default:
          return 0;
      }
    });
    setDisplayedFoods(sortedFoods);
  }, [containers, query, sort, filter]);

  return (
    <>
      FoodsPage
      <SearchBar />
      <FoodFilter groups={groups} containers={containerNames} />
      <FoodSort />
      <FoodList foods={displayedFoods} />
    </>
  );
};
