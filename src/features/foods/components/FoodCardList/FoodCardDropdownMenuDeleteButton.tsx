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
  setIsDropdownMenuOpen: (open: boolean) => void;
  containerId: IContainer['id'];
  foodId: IFood['id'];
}

export const FoodCardDropdownMenuDeleteButton = ({
  setIsDropdownMenuOpen,
  containerId,
  foodId,
}: IFoodCardDropdownMenuDeleteButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
        setIsParentOpen={setIsDropdownMenuOpen}
        setIsDialogOpen={setIsDialogOpen}
        containerId={containerId}
        foodId={foodId}
      />
    </DialogRoot>
  );
};
