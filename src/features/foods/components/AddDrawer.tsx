'use client';

import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui';
import { AddDrawerBody } from '@/features/foods/components/AddDrawerBody';

interface IAddDrawerProps {
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export const AddDrawer = ({ setIsDrawerOpen }: IAddDrawerProps) => {
  const handleCancelClick = () => {
    setIsDrawerOpen(false);
  };

  const handleAddClick = () => {
    alert('Successfully added!');
    setIsDrawerOpen(false);
  };

  return (
    <DrawerContent side="bottom">
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
    </DrawerContent>
  );
};
