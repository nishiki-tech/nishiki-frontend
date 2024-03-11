import { IconSignOut } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';

import { SignOutDialogContent } from './SignOutDialogContent';

interface ISignOutDialogTriggerButtonProps {
  /**
   * Function to close the parent component
   */
  onParentClose: () => void;
}

export const SignOutDialogTriggerButton = ({ onParentClose }: ISignOutDialogTriggerButtonProps) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={IconSignOut} size={5} color="gray-dark" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Log out</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DialogTrigger>
      <SignOutDialogContent onParentClose={onParentClose} />
    </DialogRoot>
  );
};
