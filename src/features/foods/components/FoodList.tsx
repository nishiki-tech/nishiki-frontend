import { BagIcon, ContainerIcon } from '@/assets/images/icons';
import { Card, Icon } from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';
import { formatDate } from '@/utils/dateUtils';

import { IFoodView } from '../types/utils';

export const FoodList = ({ foods }: { foods: IFoodView[] }) => {
  return (
    <>
      {foods.map((food) => (
        <Card key={food.id} className={'bg-white m-2'}>
          <div className="flex gap-4 items-center">
            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-primary text-lg">
              {foodCategories[food.category].emoji}
            </div>
            <p>
              <div className="">{food.name}</div>
              <div className="text-3xs text-gray flex items-center gap-1 my-1.5">
                <Icon icon={ContainerIcon} color="gray" size={4} />
                {food.container}
              </div>
              <div className="text-4xs flex items-center gap-1">
                <Icon icon={BagIcon} color="black" size={4} />
                {food.unit}
                <span className="absolute right-6">{formatDate(new Date(food.expiry))}</span>
              </div>
            </p>
          </div>
        </Card>
      ))}
    </>
  );
};
