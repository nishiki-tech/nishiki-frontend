import { PenIcon } from '@/assets/images/icons';
import {
  DrawerRoot,
  DrawerTrigger,
  Icon,
  SelectionDrawerButton,
  SelectionDrawerButtonIcon,
  SelectionDrawerButtonText,
} from '@/components/ui';

import React from 'react';

import { RenameGroupsDrawerContent } from './RenameGroupsDrawerContent';

export const RenameGroupsButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <DrawerRoot open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <SelectionDrawerButton>
          <SelectionDrawerButtonIcon>
            <Icon icon={PenIcon} size={5} color="primary" />
          </SelectionDrawerButtonIcon>
          <SelectionDrawerButtonText>Rename groups</SelectionDrawerButtonText>
        </SelectionDrawerButton>
      </DrawerTrigger>
      <RenameGroupsDrawerContent />
    </DrawerRoot>
  );
};
