import { IconDelete } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';
import { IContainer } from '@/types/definition';

import { useState } from 'react';

import { DeleteContainerDialogContent } from './DeleteContainerDialogContent';

interface IDeleteContainerDialogTriggerButtonProps {
  containerId: IContainer['id'];
  /**
   * The function to close the dropdown menu
   */
  onDropdownMenuClose: () => void;
}

export const DeleteContainerDialogTriggerButton = ({
  containerId,
  onDropdownMenuClose,
}: IDeleteContainerDialogTriggerButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={IconDelete} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DialogTrigger>
      <DeleteContainerDialogContent
        containerId={containerId}
        onParentClose={onDropdownMenuClose}
        onDialogClose={() => setIsDialogOpen(false)}
      />
    </DialogRoot>
  );
};
