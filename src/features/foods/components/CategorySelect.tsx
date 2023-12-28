import { LabeledInput } from '@/components/parts';
import {
  Button,
  Card,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  Input,
  inputVariants,
} from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';
import { cn } from '@/lib/tailwind/utils';

import { useState } from 'react';

interface ICategorySelectProps {}

export const CategorySelect = ({}: ICategorySelectProps) => {
  const [selectedCategory, setSelectedCategory] = useState('unselected');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Input type="hidden" name="category" value={selectedCategory} />
      <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <LabeledInput label="Category" htmlFor="category">
          <DrawerTrigger asChild>
            <Button
              id="category"
              className={cn(
                inputVariants({ variant: 'rounded', h: 'md' }),
                'flex items-center justify-start gap-2',
              )}
            >
              <div className="w-6 aspect-square rounded-full border border-primary flex items-center justify-center">
                <span className="text-base">{foodCategories[selectedCategory].emoji}</span>
              </div>
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {foodCategories[selectedCategory].name}
              </span>
            </Button>
          </DrawerTrigger>
        </LabeledInput>
        <DrawerContent side="right">
          <DrawerHeader>
            <DrawerTitle>Category</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col gap-2">
              {Object.entries(foodCategories).map(([key, value]) => {
                const isSelected = selectedCategory === key;
                return (
                  <Card
                    key={key}
                    className={cn('border border-primary', isSelected ? 'bg-primary' : 'bg-white')}
                    onClick={() => {
                      handleCategorySelect(key);
                      setIsDrawerOpen(false);
                    }}
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
    </div>
  );
};
