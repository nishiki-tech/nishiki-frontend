'use client';

import { BagIcon, ContainerIcon, MenuKebabIcon } from '@/assets/images/icons';
import { Button, Card, DrawerRoot, DrawerTrigger, Icon } from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';
import { GroupIdContainersMapType, IFoodView } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';

import { format } from 'date-fns';
import { useState } from 'react';

import { EditDrawerContent } from './Form';

interface IFoodListProps {
  foods: IFoodView[];
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
}

export const FoodList = ({
  foods,
  groupIdContainerIdsMap,
  containerIdGroupIdMap,
  containerIdNameMap,
  groupIdNameMap,
}: IFoodListProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [clickedFood, setClickedFood] = useState<IFoodView>(foods[0]);

  const handleClick = (food: IFoodView) => {
    setClickedFood(food);
  };

  return (
    <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      {foods.map((food) => (
        <Card className="mb-2 w-full flex" key={food.id}>
          <DrawerTrigger asChild>
            <Button
              className="flex grow gap-4 items-center text-left pl-4 py-2"
              onClick={() => handleClick(food)}
            >
              <figure className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-primary select-none text-2xl">
                {foodCategories[food.category]?.emoji}
              </figure>
              <div className="grow">
                <span className="text-left">{food.name}</span>
                <div className="text-xs text-gray-dark flex items-center gap-1 my-1.5">
                  <Icon icon={ContainerIcon} color="gray-dark" size={3} />
                  {containerIdNameMap[food.containerId]}
                </div>
                <div className="text-sm flex items-center gap-1">
                  <Icon icon={BagIcon} color="black" size={3} />
                  {food.quantity} {food.unit}
                  <time className="ml-auto">{format(new Date(food.expiry), 'PP')}</time>
                </div>
              </div>
            </Button>
          </DrawerTrigger>
          <Button variant="ghost" className="w-12">
            <Icon icon={MenuKebabIcon} size={4.5} />
          </Button>
        </Card>
      ))}
      <EditDrawerContent
        food={clickedFood}
        setIsDrawerOpen={setIsDrawerOpen}
        groupIdContainerIdsMap={groupIdContainerIdsMap}
        containerIdGroupIdMap={containerIdGroupIdMap}
        containerIdNameMap={containerIdNameMap}
        groupIdNameMap={groupIdNameMap}
      />
    </DrawerRoot>
  );
};
