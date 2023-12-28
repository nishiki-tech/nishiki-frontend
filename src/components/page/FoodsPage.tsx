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
  createContainerIdGroupIdMap,
  createContainerIdNameMap,
  createGroupIdNameMap,
  groupContainersByGroupId,
} from '@/features/foods/utils/containerMapping';
import { IContainer, IFood } from '@/types/definition';

import { Amplify } from 'aws-amplify';
import { fetchAuthSession } from 'aws-amplify/auth';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const OAUTH_DOMAIN: string = process.env.NEXT_PUBLIC_OAUTH_DOMAIN || '';
const LOCALHOST_URL: string = process.env.NEXT_PUBLIC_LOCALHOST_URL || '';
const OAUTH_REDIRECT_URL: string = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL || '';
const USER_POOL_ID: string = process.env.NEXT_PUBLIC_USER_POOL_ID || '';
const USER_POOL_CLIENT_ID: string = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || '';
Amplify.configure(
  {
    Auth: {
      Cognito: {
        loginWith: {
          oauth: {
            domain: OAUTH_DOMAIN, // OAuth domain
            scopes: ['openid'], // Scope needed
            responseType: 'code',
            redirectSignIn: [LOCALHOST_URL, OAUTH_REDIRECT_URL],
            redirectSignOut: [LOCALHOST_URL, OAUTH_REDIRECT_URL],
          },
        },
        userPoolId: USER_POOL_ID,
        userPoolClientId: USER_POOL_CLIENT_ID,
      },
    },
  },
  { ssr: true },
);

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
  const isFilterSet = !!group || !!container || !!query || Object.keys(categoryList).length > 0;

  const groupIdContainerIdsMap = groupContainersByGroupId(containers);
  const containerIdGroupIdMap = createContainerIdGroupIdMap(containers);
  const containerIdNameMap = createContainerIdNameMap(containers);
  const groupIdNameMap = createGroupIdNameMap(containers);

  async function currentSession() {
    try {
      const { idToken } = (await fetchAuthSession()).tokens ?? {};
      console.log('idToken client component', idToken?.toString());
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    currentSession();
    const categoryList = searchParams?.get('category')?.split(',') || [];
    setCategoryList(categoryList);
    setQuery(searchParams?.get('query') || '');
    const filterByGroup = (row: IContainer) => group === '' || group === row.group.id;
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
          isFilterSet={isFilterSet}
          groupIdContainerIdsMap={groupIdContainerIdsMap}
          containerIdGroupIdMap={containerIdGroupIdMap}
          containerIdNameMap={containerIdNameMap}
          groupIdNameMap={groupIdNameMap}
        />
      </div>
      <BadgeList
        groupName={groupIdNameMap[group]}
        containerName={containerIdNameMap[container]}
        categoryList={categoryList}
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
