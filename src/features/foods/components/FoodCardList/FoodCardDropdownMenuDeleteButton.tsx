import { DeleteIcon } from '@/assets/images/icons';
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
  containerId: IContainer['id'];
  foodId: IFood['id'];
}

export const FoodCardDropdownMenuDeleteButton = ({
  containerId,
  foodId,
}: IFoodCardDropdownMenuDeleteButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  /**
   * Close the DropdownMenu when the Dialog gets opened.
   *
   * *This useEffect not only closes the DropdownMenu but also unintentionally closes the Dialog.
   * TODO: Fix this issue.
   */
  // useEffect(() => {
  //   setIsDropdownOpen(false);
  // }, [isDialogOpen, setIsDropdownOpen]);

  return (
    <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={DeleteIcon} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DialogTrigger>
      <DeleteFoodDialogContent
        setIsDialogOpen={setIsDialogOpen}
        containerId={containerId}
        foodId={foodId}
      />
    </DialogRoot>
  );
};
