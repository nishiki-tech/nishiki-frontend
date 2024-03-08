import { IconPen } from '@/assets/images/icons';
import {
  DrawerRoot,
  DrawerTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';
import { IGroup } from '@/types/definition';

import { useState } from 'react';

import { RenameGroupDrawerContent } from './RenameGroupDrawerContent';

export const RenameGroupDrawerTriggerButton = ({
  groupId,
  currentGroupName,
  onParentClose,
}: {
  groupId: IGroup['id'];
  currentGroupName: IGroup['name'];
  onParentClose: () => void;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={IconPen} size={5} color="primary" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DrawerTrigger>
      <RenameGroupDrawerContent
        groupId={groupId}
        currentGroupName={currentGroupName}
        onClose={handleClose}
        isDrawerOpen={isDrawerOpen}
        onParentClose={onParentClose}
      />
    </DrawerRoot>
  );
};
