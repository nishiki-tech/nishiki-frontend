'use client';

import { DrawerRoot } from '@/components/ui';
import { FoodCard } from '@/features/foods/components/FoodCardList/FoodCard';
import { EditDrawerContent } from '@/features/foods/components/Form';
import { GroupIdContainersMapType, IFoodView } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';

import { useEffect, useState } from 'react';

interface IFoodListProps {
  foods: IFoodView[];
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
}

export const FoodCardList = ({
  foods,
  groupIdContainerIdsMap,
  containerIdGroupIdMap,
  containerIdNameMap,
  groupIdNameMap,
}: IFoodListProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [clickedFood, setClickedFood] = useState<IFoodView | undefined>();

  /**
   * Reset the form when the drawer is closed.
   */
  useEffect(() => {
    if (!isDrawerOpen) {
      setClickedFood(undefined);
    }
  }, [isDrawerOpen]);

  return (
    <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      {foods.map((food) => {
        return (
          <FoodCard
            key={food.id}
            food={food}
            setClickedFood={setClickedFood}
            containerIdNameMap={containerIdNameMap}
          />
        );
      })}
      {/* The drawer content must be outside of the map() method to avoid opening multiple drawers. */}
      <EditDrawerContent
        food={clickedFood}
        onDrawerClose={() => {
          setIsDrawerOpen(false);
        }}
        groupIdContainerIdsMap={groupIdContainerIdsMap}
        containerIdGroupIdMap={containerIdGroupIdMap}
        containerIdNameMap={containerIdNameMap}
        groupIdNameMap={groupIdNameMap}
      />
    </DrawerRoot>
  );
};
