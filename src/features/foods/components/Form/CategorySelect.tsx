import {
  Button,
  Card,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  inputVariants,
} from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';
import { cn } from '@/lib/tailwind/utils';

import { ButtonHTMLAttributes, Dispatch, SetStateAction, useState } from 'react';

interface ICategorySelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

export const CategorySelect = ({
  selectedCategory: category,
  setSelectedCategory: setCategory,
  ...buttonProps
}: ICategorySelectProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = (cat: string) => {
    setCategory(cat);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger asChild>
          <Button
            id="category"
            className={cn(
              inputVariants({ variant: 'rounded', h: 'md' }),
              'flex items-center justify-start gap-2',
              'data-[state=open]:ring-2 data-[state=open]:ring-primary-dark data-[state=open]:border-transparent',
            )}
            {...buttonProps}
          >
            <div className="w-6 aspect-square rounded-full border border-primary flex items-center justify-center">
              <span className="text-base">{foodCategories[category].emoji}</span>
            </div>
            <span
              className={cn(
                'whitespace-nowrap overflow-hidden text-ellipsis',
                category === 'unselected' && 'text-gray',
              )}
            >
              {foodCategories[category].name}
            </span>
          </Button>
        </DrawerTrigger>
        <DrawerContent side="right">
          <DrawerHeader>
            <DrawerTitle>Category</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col gap-2">
              {Object.entries(foodCategories).map(([key, value]) => {
                const isSelected = category === key;
                return (
                  <Card
                    key={key}
                    className={cn('border border-primary', isSelected ? 'bg-primary' : 'bg-white')}
                    onClick={() => handleClick(key)}
                    asChild
                  >
                    <Button className="flex gap-4 items-center justify-start">
                      <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center border border-primary select-none">
                        <span role="img" aria-label={value.name} className="text-lg">
                          {value.emoji}
                        </span>
                      </div>
                      {value.name}
                    </Button>
                  </Card>
                );
              })}
            </div>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </>
  );
};
