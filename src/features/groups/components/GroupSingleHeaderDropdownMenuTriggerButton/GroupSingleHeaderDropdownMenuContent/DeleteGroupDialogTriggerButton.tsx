import { IconDelete } from '@/assets/images/icons';
import {
  DialogRoot,
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';
import { IGroup } from '@/types/definition';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { DeleteGroupDialogContent } from '../../GroupCardList/GroupCard/GroupCardContent/GroupCardDropdownMenuTriggerButton/GroupCardDropdownMenuContent/DeleteGroupDialogTriggerButton/DeleteGroupDialogContent';

export const DeleteGroupDialogTriggerButton = ({
  groupId,
  onParentClose,
}: {
  groupId: IGroup['id'];
  onParentClose: () => void;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const handlePageTransit = () => {
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
        onPageTransit={handlePageTransit}
      />
    </DialogRoot>
  );
};
