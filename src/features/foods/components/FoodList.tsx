// 'use client';
import { IFood } from '@/types/definition';

// import { useSearchParams } from 'next/navigation';

export const FoodList = ({ foods }: { foods: IFood[] }) => {
  // const searchParams = useSearchParams();

  // const search = searchParams.get('sort');

  // // This will not be logged on the server when using static rendering
  // console.log('sort??', search);
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
