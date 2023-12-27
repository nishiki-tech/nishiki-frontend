'use client';

import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui';
import { AddDrawerBody } from '@/features/foods/components/AddDrawerBody';

interface IAddDrawerContentProps {
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export const AddDrawerContent = ({ setIsDrawerOpen }: IAddDrawerContentProps) => {
  const handleCancelClick = () => {
    setIsDrawerOpen(false);
  };

  const handleAddClick = () => {
    alert('Successfully added!');
    setIsDrawerOpen(false);
  };

  return (
    <>
      <DrawerHeader>
        <DrawerTitle>Add Food</DrawerTitle>
      </DrawerHeader>
      <DrawerBody>
        <AddDrawerBody />
      </DrawerBody>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="cancel" size="sm" onClick={handleCancelClick}>
            Cancel
          </Button>
        </DrawerClose>
        <Button variant="primary" size="sm" onClick={handleAddClick}>
          Add food
        </Button>
      </DrawerFooter>
    </>
  );
};
