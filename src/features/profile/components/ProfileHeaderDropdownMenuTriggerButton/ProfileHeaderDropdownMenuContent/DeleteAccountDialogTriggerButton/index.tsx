import { IconDelete } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';
import { IUser } from '@/types/definition';

import { DeleteAccountDialogContent } from './DeleteAccountDialogContent';

interface IDeleteAccountDialogTriggerButtonProps {
  /**
   * The ID of the user to delete.
   */
  userId: IUser['id'];
  /**
   * Function to close the parent component
   */
  onParentClose: () => void;
}

export const DeleteAccountDialogTriggerButton = ({
  userId,
  onParentClose,
}: IDeleteAccountDialogTriggerButtonProps) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={IconDelete} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText className="text-gray-dark">Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DialogTrigger>
      <DeleteAccountDialogContent userId={userId} onParentClose={onParentClose} />
    </DialogRoot>
  );
};
