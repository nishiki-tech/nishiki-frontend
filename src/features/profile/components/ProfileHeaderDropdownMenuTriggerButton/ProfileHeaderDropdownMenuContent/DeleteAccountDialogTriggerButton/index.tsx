import { IconDelete } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';

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
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={IconDelete} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText className="text-gray-light">Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DialogTrigger>
      <DeleteAccountDialogContent onParentClose={onParentClose} />
    </DialogRoot>
  );
};
