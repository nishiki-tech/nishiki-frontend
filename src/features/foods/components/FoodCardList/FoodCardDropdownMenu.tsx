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
  /**
   * The ID of the container that the food belongs to.
   */
  containerId: IContainer['id'];
  /**
   * The ID of the food this dropdown menu is for.
   */
  foodId: IFood['id'];
}

export const FoodCardDropdownMenu = ({ containerId, foodId }: IFoodCardDropdownMenuProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  /**
   * The function that is called when the dropdown menu item is selected.
   * e.preventDefault() prevents the dropdown menu from closing when selecting that item.
   * This is necessary because closing dropdown menu also closes the dialog unintentionally.
   * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item}
   *
   * @param e The event object
   * @returns void
   */
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
            onDropdownMenuClose={() => {
              setIsDropdownMenuOpen(false);
            }}
            containerId={containerId}
            foodId={foodId}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
