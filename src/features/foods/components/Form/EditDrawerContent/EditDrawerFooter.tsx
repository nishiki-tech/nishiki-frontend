'use client';

import DeleteIcon from '@/assets/images/icons/icon_delete.svg';
import { Button, DialogRoot, DrawerFooter, Icon } from '@/components/ui';
import { DeleteFoodDialogContent } from '@/features/foods/components';
import { IContainer, IFood } from '@/types/definition';

import { DialogTrigger } from '@radix-ui/react-dialog';
import { useState } from 'react';

interface IEditDrawerFooterProps {
  /**
   * The function to close the drawer.
   */
  onDrawerClose: () => void;
  /**
   * The ID of the container that the food belongs to.
   */
  containerId?: IContainer['id'];
  /**
   * The ID of the food this drawer is for.
   */
  foodId?: IFood['id'];
  /**
   * Loading state of the form submission.
   */
  isLoading: boolean;
}

export const EditDrawerFooter = ({
  onDrawerClose,
  containerId,
  foodId,
  isLoading,
}: IEditDrawerFooterProps) => {
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
          closeParentOnCancel={false}
          onParentClose={onDrawerClose}
          onDialogClose={() => {
            setIsDialogOpen(false);
          }}
          containerId={containerId}
          foodId={foodId}
        />
      </DialogRoot>
      <Button type="submit" variant="primary" size="sm" disabled={isLoading}>
        Update
      </Button>
    </DrawerFooter>
  );
};
