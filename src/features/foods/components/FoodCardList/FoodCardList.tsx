'use client';

import { BagIcon, ContainerIcon } from '@/assets/images/icons';
import { Button, Card, DrawerRoot, DrawerTrigger, Icon } from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';
import { FoodCardDropdownMenu } from '@/features/foods/components/FoodCardList/FoodCardDropdownMenu';
import { EditDrawerContent } from '@/features/foods/components/Form';
import { GroupIdContainersMapType, IFoodView } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';

import { format } from 'date-fns';
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

  const handleClick = (food: IFoodView) => {
    setClickedFood(food);
  };

  return (
    <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      {foods.map((food) => {
        return (
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
                    {food.quantity ? (
                      <>
                        <Icon icon={BagIcon} color="black" size={3} />
                        <span>
                          {food.quantity}
                          {food.unit ? ` ${food.unit}` : ''}
                        </span>
                      </>
                    ) : null}
                    <time className="ml-auto">
                      {food.expiry && format(new Date(food.expiry), 'PP')}
                    </time>
                  </div>
                </div>
              </Button>
            </DrawerTrigger>
            <FoodCardDropdownMenu containerId={food.containerId} foodId={food.id} />
          </Card>
        );
      })}
      {/* The drawer content must be outside of the map() method to avoid opening multiple drawers. */}
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
