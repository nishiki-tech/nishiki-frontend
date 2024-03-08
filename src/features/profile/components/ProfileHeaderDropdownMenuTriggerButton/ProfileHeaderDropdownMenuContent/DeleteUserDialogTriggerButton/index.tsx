import { IconDelete } from '@/assets/images/icons';
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

import { DeleteUserDialogContent } from './DeleteUserDialogContent';

interface IDeleteUserDialogTriggerButtonProps {
  /**
   * Function to close the parent component
   */
  onParentClose: () => void;
}

export const DeleteUserDialogTriggerButton = ({
  onParentClose,
}: IDeleteUserDialogTriggerButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const router = useRouter();
  /**
   * Function to transition to groupCollection page
   */
  const navigateToGroupPage = () => {
    router.push('/groups');
  };

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
      <DeleteUserDialogContent
        userId={''}
        onParentClose={onParentClose}
        onDialogClose={() => setIsDialogOpen(false)}
        navigateOnSuccess={navigateToGroupPage}
      />
    </DialogRoot>
  );
};
