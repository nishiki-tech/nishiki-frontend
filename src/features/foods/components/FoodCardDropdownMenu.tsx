import { MenuKebabIcon } from '@/assets/images/icons';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
} from '@/components/ui';
import { FoodCardDropdownMenuDeleteButton } from '@/features/foods/components/FoodCardDropdownMenuDeleteButton';
import { IContainer, IFood } from '@/types/definition';

interface IFoodCardDropdownMenuProps {
  containerId: IContainer['id'];
  foodId: IFood['id'];
}

export const FoodCardDropdownMenu = ({ containerId, foodId }: IFoodCardDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12">
          <Icon icon={MenuKebabIcon} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <FoodCardDropdownMenuDeleteButton containerId={containerId} foodId={foodId} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
