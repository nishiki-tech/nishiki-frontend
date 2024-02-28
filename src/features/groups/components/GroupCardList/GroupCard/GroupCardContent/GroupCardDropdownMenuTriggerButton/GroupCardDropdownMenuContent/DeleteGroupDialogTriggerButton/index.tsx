import { IconDelete } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';

import { useState } from 'react';

import { DeleteGroupDialogContent } from './DeleteGroupDialogContent';

interface IGroupCardDropdownMenuDeleteButtonProps {
  /**
   * The function to close the dropdown menu.
   */
  onDropdownMenuClose: () => void;
}

export const DeleteGroupDialogTriggerButton = ({
  onDropdownMenuClose,
}: IGroupCardDropdownMenuDeleteButtonProps) => {
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
      <DeleteGroupDialogContent
        onParentClose={onDropdownMenuClose}
        onDialogClose={() => setIsDialogOpen(false)}
      />
    </DialogRoot>
  );
};
