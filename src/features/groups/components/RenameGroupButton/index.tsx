import { PenIcon } from '@/assets/images/icons';
import {
  DrawerRoot,
  DrawerTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';

import { useState } from 'react';

import { RenameGroupDrawerContent } from './RenameGroupDrawerContent';

export const RenameGroupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DrawerRoot open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={PenIcon} size={5} color="primary" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DrawerTrigger>
      <RenameGroupDrawerContent />
    </DrawerRoot>
  );
};
