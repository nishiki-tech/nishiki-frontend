import { MenuKebabIcon } from '@/assets/images/icons';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
} from '@/components/ui';
import { IContainer, IFood } from '@/types/definition';

import { useState } from 'react';

import { FoodCardDropdownMenuDeleteButton } from '.';

interface IFoodCardDropdownMenuProps {
  containerId: IContainer['id'];
  foodId: IFood['id'];
}

export const FoodCardDropdownMenu = ({ containerId, foodId }: IFoodCardDropdownMenuProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const handleSelect = (e: Event) => {
    e.preventDefault();
  };

  return (
    <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12">
          <Icon icon={MenuKebabIcon} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={handleSelect}>
          <FoodCardDropdownMenuDeleteButton
            setIsDropdownMenuOpen={setIsDropdownMenuOpen}
            containerId={containerId}
            foodId={foodId}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
