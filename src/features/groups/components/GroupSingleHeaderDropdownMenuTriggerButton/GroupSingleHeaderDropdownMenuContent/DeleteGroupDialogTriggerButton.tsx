import { IconDelete } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';
import { DeleteGroupDialogContent } from '@/features/groups/components/GroupCardList/GroupCard/GroupCardContent/GroupCardDropdownMenuTriggerButton/GroupCardDropdownMenuContent/DeleteGroupDialogTriggerButton/DeleteGroupDialogContent';
import { IGroup } from '@/types/definition';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IDeleteGroupDialogTriggerButton {
  /**
   * an identifier of a group which a user is willing to delete
   */
  groupId: IGroup['id'];
  /**
   * Function to close the parent component
   */
  onParentClose: () => void;
}

export const DeleteGroupDialogTriggerButton = ({
  groupId,
  onParentClose,
}: IDeleteGroupDialogTriggerButton) => {
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
      <DeleteGroupDialogContent
        groupId={groupId}
        onParentClose={onParentClose}
        onDialogClose={() => setIsDialogOpen(false)}
        navigateOnSuccess={navigateToGroupPage}
      />
    </DialogRoot>
  );
};
