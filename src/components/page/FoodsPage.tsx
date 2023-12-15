'use client';
import { FoodList } from '@/features/foods/components/FoodList';
import { SearchBar } from '@/features/foods/components/SearchBar';
import { IContainer, IFood } from '@/types/definition';

import React, { useEffect, useState } from 'react';

export const FoodsPage = ({ containers }: { containers: IContainer[] }) => {
  const [foods, setFoods] = useState<IFood[]>([]);
  const [displayedFoods, setDisplayedFoods] = useState<IFood[]>([]);

  useEffect(() => {
    const fetchFoods = () => {
      try {
        const initialFoods = containers.flatMap((row) => {
          return row.foods;
        });
        setFoods(initialFoods);
        setDisplayedFoods(initialFoods);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };
    fetchFoods();
  }, [containers]);

  const handleSearch = (text: string) => {
    setDisplayedFoods(
      foods.filter((food) => {
        return food.name.includes(text);
      }),
    );
  };

  return (
    <>
      FoodsPage
      <SearchBar onSearch={handleSearch} />
      <div>filter</div>
      <FoodList foods={displayedFoods} />
    </>
  );
};
