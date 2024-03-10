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

interface IRenameGroupDrawerTriggerButton {
  /**
   * an identifier of a group which a user is willing to rename/delete
   */
  groupId: IGroup['id'];
  /**
   * The current group name which a user is willing to change
   */
  currentGroupName: IGroup['name'];
  /**
   * the function to close the dialog
   */
  onParentClose: () => void;
}

export const RenameGroupDrawerTriggerButton = ({
  groupId,
  currentGroupName,
  onParentClose,
}: IRenameGroupDrawerTriggerButton) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  /**
   * the function to close the drawer
   */
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
