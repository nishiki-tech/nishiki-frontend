'use client';

import { MenuMeatballIcon } from '@/assets/images/icons';
import { Icon } from '@/components/ui';
import { BadgeList } from '@/features/foods/components/BadgeList';
import { FilterButton } from '@/features/foods/components/FilterButton';
import { FoodList } from '@/features/foods/components/FoodList';
import { FoodSort } from '@/features/foods/components/FoodSort';
import { SearchBar } from '@/features/foods/components/SearchBar';
import { IFoodView } from '@/features/foods/types/FoodTypes';
import {
  createContainerIdNameMap,
  createGroupIdNameMap,
  groupContainersByGroupId,
} from '@/features/foods/utils/containerMapping';
import { IContainer, IFood } from '@/types/definition';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const FoodsPage = ({ containers }: { containers: IContainer[] }) => {
  const searchParams = useSearchParams();
  const sort = searchParams?.get('sort') || '';
  const group = searchParams?.get('group') || '';
  const container = searchParams?.get('container') || '';
  const [displayedFoods, setDisplayedFoods] = useState<IFoodView[]>([]);
  const [query, setQuery] = useState<string>(searchParams?.get('query') || '');
  const [categoryList, setCategoryList] = useState<string[]>(
    searchParams?.get('category')?.split(',') || [],
  );

  const containersGroupedByGroupId = groupContainersByGroupId(containers);
  const containerIdMap = createContainerIdNameMap(containers);
  const groupIdMap = createGroupIdNameMap(containers);

  useEffect(() => {
    const categoryList = searchParams?.get('category')?.split(',') || [];
    setCategoryList(categoryList);
    setQuery(searchParams?.get('query') || '');

    const filterByGroup = (row: IContainer) => group === '' || group === row.group.groupId;
    const filterByContainer = (row: IContainer) => container === '' || container === row.id;
    const filterByCategory = (food: IFoodView) => {
      if (!categoryList.length) return true;
      return categoryList.some((c) => food.category.includes(c));
    };
    const filterByName = (food: IFoodView) => food.name.toLowerCase().includes(query.toLowerCase());

    const filteredContainers = containers.filter(filterByGroup).filter(filterByContainer);
    const initialFoodsView: IFoodView[] = filteredContainers.flatMap((container: IContainer) =>
      container.foods.map((food: IFood) => ({
        ...food,
        container: container.name,
      })),
    );
    const filteredFoods = initialFoodsView.filter(filterByName).filter(filterByCategory);

    const sortFoods = (a: IFood, b: IFood) => {
      switch (sort) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'expiry':
          return a.expiry < b.expiry ? -1 : 1;
        default:
          return a.createdAt > b.createdAt ? -1 : 1; // default is createdAt desc order
      }
    };

    const sortedFoods = [...filteredFoods].sort(sortFoods);
    setDisplayedFoods(sortedFoods);
  }, [containers, query, sort, group, container, searchParams]);

  return (
    <div className="mt-6 mx-4 mb-16">
      <div className="relative">
        <SearchBar />
        <FilterButton
          containers={containersGroupedByGroupId}
          containerIdMap={containerIdMap}
          groupIdMap={groupIdMap}
        />
      </div>
      <BadgeList
        group={group}
        container={container}
        categoryList={categoryList}
        groupIdMap={groupIdMap}
        containerIdMap={containerIdMap}
        setCategoryList={setCategoryList}
      />
      <div className="flex items-center justify-end">
        <FoodSort />
        <button className="h-12 w-12 flex justify-center items-center">
          <Icon icon={MenuMeatballIcon} size={4} />
        </button>
      </div>
      <FoodList foods={displayedFoods} />
    </div>
  );
};
