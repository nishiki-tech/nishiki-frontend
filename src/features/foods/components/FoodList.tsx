import { BagIcon, ContainerIcon } from '@/assets/images/icons';
import { Card, Icon } from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';

import { format } from 'date-fns';

import { IFoodView } from '../types/FoodTypes';

export const FoodList = ({ foods }: { foods: IFoodView[] }) => {
  return (
    <>
      {foods.map((food) => (
        <Card key={food.id} className={'bg-white mb-2 w-full'} asChild>
          <button className="flex gap-4 items-center text-left">
            <figure className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-primary select-none text-2xl">
              {foodCategories[food.category]?.emoji}
            </figure>
            <div className="grow">
              <span className="text-left">{food.name}</span>
              <div className="text-xs text-gray-dark flex items-center gap-1 my-1.5">
                <Icon icon={ContainerIcon} color="gray-dark" size={3} />
                {food.container}
              </div>
              <div className="text-sm flex items-center gap-1">
                <Icon icon={BagIcon} color="black" size={3} />
                {food.quantity} {food.unit}
                <time className="ml-auto">{format(new Date(food.expiry), 'PP')}</time>
              </div>
            </div>
          </button>
        </Card>
      ))}
    </>
  );
};
