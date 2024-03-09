import { IconLogout } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';

import { LogoutDialogContent } from './LogoutDialogContent';

interface ILogoutDialogTriggerButtonProps {
  /**
   * Function to close the parent component
   */
  onParentClose: () => void;
}

export const LogoutDialogTriggerButton = ({ onParentClose }: ILogoutDialogTriggerButtonProps) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={IconLogout} size={5} color="gray-dark" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Log out</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DialogTrigger>
      <LogoutDialogContent onParentClose={onParentClose} />
    </DialogRoot>
  );
};
