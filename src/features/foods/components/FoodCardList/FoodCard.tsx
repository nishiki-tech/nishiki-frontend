import { IconBag, IconContainer } from '@/assets/images/icons';
import { Button, Card, DrawerTrigger, Icon } from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';
import { FoodCardDropdownMenu } from '@/features/foods/components/FoodCardList/FoodCardDropdownMenu';
import { IFoodView } from '@/features/foods/types/FoodTypes';
import { ContainerIdNameMapType } from '@/features/foods/utils/containerMapping';

import { format } from 'date-fns';

interface IFoodCardProps {
  food: IFoodView;
  setClickedFood: (food: IFoodView) => void;
  containerIdNameMap: ContainerIdNameMapType;
}

export const FoodCard = ({ food, setClickedFood, containerIdNameMap }: IFoodCardProps) => {
  const handleTriggerClick = () => {
    setClickedFood(food);
  };

  return (
    <Card className="mb-2 w-full flex">
      <DrawerTrigger asChild>
        <Button
          className="flex grow gap-4 items-center text-left pl-4 py-2"
          onClick={() => handleTriggerClick()}
        >
          <figure className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-primary select-none text-2xl">
            {foodCategories[food.category]?.emoji}
          </figure>
          <div className="grow">
            <span className="text-left">{food.name}</span>
            <div className="text-xs text-gray-dark flex items-center gap-1 my-1.5">
              <Icon icon={IconContainer} color="gray-dark" size={3} />
              {containerIdNameMap[food.containerId]}
            </div>
            <div className="text-sm flex items-center gap-1">
              {food.quantity ? (
                <>
                  <Icon icon={IconBag} color="black" size={3} />
                  <span>
                    {food.quantity}
                    {food.unit ? ` ${food.unit}` : ''}
                  </span>
                </>
              ) : null}
              <time className="ml-auto">{food.expiry && format(new Date(food.expiry), 'PP')}</time>
            </div>
          </div>
        </Button>
      </DrawerTrigger>
      <FoodCardDropdownMenu containerId={food.containerId} foodId={food.id} />
    </Card>
  );
};
