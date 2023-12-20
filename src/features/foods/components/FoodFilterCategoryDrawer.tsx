'use client';

import { TriangleRightIcon } from '@/assets/images/icons';
import {
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  Icon,
} from '@/components/ui';
import { Card } from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';

import { useState } from 'react';

export const FoodFilterCategoryDrawer = ({
  selectedCategories,
  toggleCategory,
}: {
  selectedCategories: { [key: string]: boolean };
  toggleCategory: (newValue: string) => void;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger asChild>
          <div className="flex items-center">
            Category
            <Icon icon={TriangleRightIcon} className="absolute right-6" />
          </div>
        </DrawerTrigger>
        <DrawerContent side="right">
          <DrawerHeader>
            <DrawerTitle>Category</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <div className="">
              {Object.entries(foodCategories).map(([key, value]) => {
                const isSelected = selectedCategories[key] || false;
                return (
                  <Card
                    key={key}
                    className={`border border-primary m-1 ${
                      isSelected ? 'bg-primary' : 'bg-white'
                    }`}
                    onClick={() => toggleCategory(key)}
                  >
                    <div className="flex gap-4 items-center">
                      <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center border border-primary">
                        {value.emoji}
                      </div>
                      {value.name}
                    </div>
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
