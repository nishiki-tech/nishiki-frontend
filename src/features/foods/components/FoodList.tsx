import { IFood } from '@/types/definition';

export const FoodList = ({ foods }: { foods: IFood[] }) => {
  return (
    <>
      {foods.map((food) => (
        <div key={food.id}>
          <span>{food.id} </span>
          <span>{food.name} </span>
          <span>
            {JSON.stringify(food.expiry)}
            {food.unit}{' '}
          </span>
          <span>{food.quantity} </span>
          <span>{food.unit} </span>
        </div>
      ))}
    </>
  );
};
