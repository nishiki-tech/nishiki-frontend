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

import { DeleteAccountDialogContent } from './DeleteAccountDialogContent';

interface IDeleteAccountDialogTriggerButtonProps {
  /**
   * Function to close the parent component
   */
  onParentClose: () => void;
}

export const DeleteAccountDialogTriggerButton = ({
  onParentClose,
}: IDeleteAccountDialogTriggerButtonProps) => {
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
      <DeleteAccountDialogContent
        onParentClose={onParentClose}
        onDialogClose={() => setIsDialogOpen(false)}
      />
    </DialogRoot>
  );
};
