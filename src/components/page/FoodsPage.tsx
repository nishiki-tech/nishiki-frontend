'use client';

import { ContainerIcon, HomeIcon_Off } from '@/assets/images/icons';
import { foodCategories } from '@/const/foodCategory';
import { FilterBadge } from '@/features/foods/components';
import { FoodFilterDrawer } from '@/features/foods/components/FoodFilterDrawer';
import { FoodList } from '@/features/foods/components/FoodList';
import { FoodSort } from '@/features/foods/components/FoodSort';
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
    group?: string;
    category?: string;
    container?: string;
  };
}) => {
  const [displayedFoods, setDisplayedFoods] = useState<IFood[]>([]);
  const query = searchParams?.query || '';
  const sort = searchParams?.sort || '';
  const group = searchParams?.group || '';
  const container = searchParams?.container || '';
  const category = searchParams?.category || '';

  const groupContainersByGroupId = (data: IContainer[]): Record<string, string[]> => {
    return data.reduce(
      (acc, { group, name }) => ({
        ...acc,
        [group]: acc[group] ? [...acc[group], name] : [name],
      }),
      {} as Record<string, string[]>,
    );
  };

  const containersGroupByGroups = groupContainersByGroupId(containers);
  useEffect(() => {
    let filteredContainers = containers.filter((row) => {
      if (group === '') return true;
      return group === row.group;
    });
    filteredContainers = filteredContainers.filter((row) => {
      if (container === '') return true;
      return container === row.name;
    });
    const initialFoods = filteredContainers.flatMap((row) => row.foods);
    let filteredFoods = initialFoods.filter((food) => food.name.includes(query));
    filteredFoods = filteredFoods.filter((food) => {
      if (category === '') return true;
      return food.category.includes(category);
    });
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
  }, [containers, query, sort, group, container, category]);

  return (
    <>
      <FoodFilterDrawer containers={containersGroupByGroups} />
      <div className="flex gap-1 mb-1 overflow-x-auto">
        {group ? <FilterBadge icon={HomeIcon_Off} text="Group" /> : <></>}
        {container ? <FilterBadge icon={ContainerIcon} text="Container" /> : <></>}
        {category.split(',').map((key) => {
          return (
            <FilterBadge
              key={key}
              emoji={foodCategories[key].emoji}
              text={foodCategories[key].name}
            />
          );
        })}
      </div>
      {group}
      <br />
      {container}
      <br />
      {category}
      <br />
      <FoodSort />
      <FoodList foods={displayedFoods} />
    </>
  );
};
