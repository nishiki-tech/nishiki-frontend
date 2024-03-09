import { IconLogout } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { LogoutDialogContent } from './LogoutDialogContent';

interface ILogoutDialogTriggerButtonProps {
  /**
   * Function to close the parent component
   */
  onParentClose: () => void;
}

export const LogoutDialogTriggerButton = ({ onParentClose }: ILogoutDialogTriggerButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const router = useRouter();
  /**
   * Function to transition to home page
   */
  const navigateToHomePage = () => {
    router.push('/');
  };
  return (
    <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={IconLogout} size={5} color="gray-dark" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Log out</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DialogTrigger>
      <LogoutDialogContent
        userId={''}
        onParentClose={onParentClose}
        onDialogClose={() => setIsDialogOpen(false)}
        navigateOnSuccess={navigateToHomePage}
      />
    </DialogRoot>
  );
};
