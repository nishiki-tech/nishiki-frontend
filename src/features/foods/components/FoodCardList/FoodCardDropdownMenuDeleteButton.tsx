import { IconDelete } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';
import { DeleteFoodDialogContent } from '@/features/foods/components/DeleteFoodDialogContent';
import { IContainer, IFood } from '@/types/definition';

import { useState } from 'react';

interface IFoodCardDropdownMenuDeleteButtonProps {
  /**
   * The function to close the dropdown menu.
   */
  onDropdownMenuClose: () => void;
  /**
   * The ID of the container that the food belongs to.
   */
  containerId: IContainer['id'];
  /**
   * The ID of the food this dropdown menu is for.
   */
  foodId: IFood['id'];
}

export const FoodCardDropdownMenuDeleteButton = ({
  onDropdownMenuClose,
  containerId,
  foodId,
}: IFoodCardDropdownMenuDeleteButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={IconDelete} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DialogTrigger>
      <DeleteFoodDialogContent
        onParentClose={onDropdownMenuClose}
        onDialogClose={() => {
          setIsDialogOpen(false);
        }}
        containerId={containerId}
        foodId={foodId}
      />
    </DialogRoot>
  );
};
