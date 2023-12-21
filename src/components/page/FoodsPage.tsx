'use client';

import { ContainerIcon, HomeIcon_Off, MenuMeatballIcon } from '@/assets/images/icons';
import { Icon } from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';
import { FilterBadge } from '@/features/foods/components';
import { FilterButton } from '@/features/foods/components/FilterButton';
import { FoodList } from '@/features/foods/components/FoodList';
import { FoodSort } from '@/features/foods/components/FoodSort';
import { SearchBar } from '@/features/foods/components/SearchBar';
import { IFoodView } from '@/features/foods/types/utils';
import { IContainer, IFood } from '@/types/definition';

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const FoodsPage = ({ containers }: { containers: IContainer[] }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  const sort = searchParams?.get('sort') || '';
  const group = searchParams?.get('group') || '';
  const container = searchParams?.get('container') || '';
  const [displayedFoods, setDisplayedFoods] = useState<IFoodView[]>([]);
  const [query, setQuery] = useState(searchParams?.get('query') || '');
  const [categoryList, setCategoryList] = useState(searchParams?.get('category')?.split(',') || []);

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

  const updateUrlParams = (key: string, value?: string | string[]) => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      params.delete(key);
    } else {
      params.set(key, Array.isArray(value) ? value.join(',') : value);
    }
    replace(`${pathname}?${params.toString()}` as Route);
  };

  const removeGroupFilter = () => {
    updateUrlParams('group');
  };

  const removeContainerFilter = () => {
    updateUrlParams('container');
  };

  const removeCategoryFilter = (key: string) => {
    const updatedCategoryList = categoryList.filter((category) => category !== key);
    setCategoryList(updatedCategoryList);
    updateUrlParams('category', updatedCategoryList);
  };

  useEffect(() => {
    const categoryList = searchParams?.get('category')?.split(',') || [];
    setCategoryList(categoryList);
    setQuery(searchParams?.get('query') || '');

    const filterByGroup = (row: { group: string }) => group === '' || group === row.group;
    const filterByContainer = (row: { name: string }) => container === '' || container === row.name;
    const filterByCategory = (food: { category: string | string[] }) => {
      if (!categoryList.length) return true;
      return categoryList.some((c) => food.category.includes(c));
    };
    const filterByName = (food: { name: string | string[] }) => food.name.includes(query);

    const filteredContainers = containers.filter(filterByGroup).filter(filterByContainer);
    const initialFoodsView: IFoodView[] = filteredContainers.flatMap((container) =>
      container.foods.map((food) => ({
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
    <div className="mt-6 mx-4 mb-2">
      <div className="relative">
        <SearchBar />
        <FilterButton containers={containersGroupByGroups} />
      </div>
      <div
        className={`flex ${
          group || container || categoryList.length > 0
            ? 'gap-1.5 mt-4 mb-1.5 overflow-scroll whitespace-nowrap'
            : ''
        }`}
      >
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
      <div className="flex items-center justify-end">
        <FoodSort />
        <div className="px-3.5">
          <Icon icon={MenuMeatballIcon} size={4} />
        </div>
      </div>
      <FoodList foods={displayedFoods} />
    </div>
  );
};
