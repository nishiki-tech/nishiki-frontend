import { IconPen } from '@/assets/images/icons';
import {
  DrawerRoot,
  DrawerTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  Icon,
} from '@/components/ui';

import { RenameGroupDrawerContent } from './RenameGroupDrawerContent';

export const RenameGroupDrawerTriggerButton = () => {
  return (
    <DrawerRoot>
      <DrawerTrigger asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={IconPen} size={5} color="primary" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DrawerTrigger>
      <RenameGroupDrawerContent />
    </DrawerRoot>
  );
};
