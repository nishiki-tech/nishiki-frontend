'use client';

import DeleteIcon from '@/assets/images/icons/icon_delete.svg';
import { Button, DialogRoot, DrawerFooter, Icon } from '@/components/ui';
import { DeleteFoodDialogContent } from '@/features/foods/components';
import { IFoodView } from '@/features/foods/types/FoodTypes';

import { DialogTrigger } from '@radix-ui/react-dialog';
import { useState } from 'react';

interface IEditDrawerFooterProps {
  food?: IFoodView;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export const EditDrawerFooter = ({ food, setIsDrawerOpen }: IEditDrawerFooterProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DrawerFooter>
      <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="cancel" size="sm">
            <Icon icon={DeleteIcon} color="danger" size={4.5} />
            Delete
          </Button>
        </DialogTrigger>
        <DeleteFoodDialogContent
          setIsParentOpen={setIsDrawerOpen}
          setIsDialogOpen={setIsDialogOpen}
          containerId={food?.containerId}
          foodId={food?.id}
        />
      </DialogRoot>
      <Button type="submit" variant="primary" size="sm">
        Update
      </Button>
    </DrawerFooter>
  );
};
