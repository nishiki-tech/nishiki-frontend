'use client';

import { ContainerIcon, HomeIcon_Off } from '@/assets/images/icons';
import { foodCategories } from '@/const/foodCategory';
import { FilterBadge } from '@/features/foods/components';
import { FoodFilterDrawer } from '@/features/foods/components/FoodFilterDrawer';
import { FoodList } from '@/features/foods/components/FoodList';
import { FoodSort } from '@/features/foods/components/FoodSort';
import { SortMode } from '@/features/foods/types/utils';
import { IContainer, IFood } from '@/types/definition';

import { Route } from 'next';
import { usePathname, useRouter } from 'next/navigation';
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
    group?: string;
    category?: string;
    container?: string;
  };
}) => {
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  const [displayedFoods, setDisplayedFoods] = useState<IFood[]>([]);
  const query = searchParams?.query || '';
  const sort = searchParams?.sort || '';
  const group = searchParams?.group || '';
  const container = searchParams?.container || '';
  const [categoryList, setCategoryList] = useState(searchParams?.category?.split(',') || []);

  const groupContainersByGroupId = (data: IContainer[]): Record<string, string[]> => {
    return data.reduce(
      (acc, { group, name }) => ({
        ...acc,
        [group]: acc[group] ? [...acc[group], name] : [name],
      }),
      {} as Record<string, string[]>,
    );
  };

  const removeGroupFilter = () => {
    params.delete('group');
    replace(`${pathname}?${params.toString()}` as Route);
  };

  const removeContainerFilter = () => {
    params.delete('container');
    replace(`${pathname}?${params.toString()}` as Route);
  };

  const removeCategoryFilter = (key: string) => {
    const c = categoryList.filter((category) => key != category);
    setCategoryList(c);
    params.delete('category');
    if (c.length) {
      params.set('category', c.join(','));
    }
    replace(`${pathname}?${params.toString()}` as Route);
  };

  const containersGroupByGroups = groupContainersByGroupId(containers);
  useEffect(() => {
    const categoryList = searchParams?.category?.split(',') || [];
    setCategoryList(categoryList);

    const filterByGroup = (row: { group: string }) => group === '' || group === row.group;
    const filterByContainer = (row: { name: string }) => container === '' || container === row.name;
    const filterByCategory = (food: { category: string | string[] }) => {
      if (!categoryList.length) return true;
      return categoryList.some((c) => food.category.includes(c));
    };
    const filterByName = (food: { name: string | string[] }) => food.name.includes(query);

    const filteredContainers = containers.filter(filterByGroup).filter(filterByContainer);
    const initialFoods = filteredContainers.flatMap((row) => row.foods);
    const filteredFoods = initialFoods.filter(filterByName).filter(filterByCategory);

    const sortFoods = (a: IFood, b: IFood) => {
      switch (sort) {
        case SortMode.NAME:
          return a.name.localeCompare(b.name);
        case SortMode.EXPIRY:
          return a.expiry < b.expiry ? -1 : 1;
        default:
          return 0;
      }
    };

    const sortedFoods = [...filteredFoods].sort(sortFoods);
    setDisplayedFoods(sortedFoods);
  }, [containers, query, sort, group, container, searchParams]);

  return (
    <>
      <FoodFilterDrawer containers={containersGroupByGroups} />
      <div className="flex gap-1 mb-1 overflow-x-auto">
        {group ? (
          <FilterBadge icon={HomeIcon_Off} text={group} onCrossClick={() => removeGroupFilter()} />
        ) : (
          <></>
        )}
        {container ? (
          <FilterBadge
            icon={ContainerIcon}
            text={container}
            onCrossClick={() => removeContainerFilter()}
          />
        ) : (
          <></>
        )}
        {categoryList.map((key) => {
          return (
            <FilterBadge
              key={key}
              emoji={foodCategories[key]?.emoji}
              text={foodCategories[key]?.name}
              onCrossClick={() => removeCategoryFilter(key)}
            />
          );
        })}
      </div>
      <FoodSort />
      <FoodList foods={displayedFoods} />
    </>
  );
};
