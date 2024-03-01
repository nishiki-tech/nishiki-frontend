import { IconPen } from '@/assets/images/icons';
import {
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  DropdownMenuContent,
  DropdownMenuItem,
  Icon,
} from '@/components/ui';

import { DeleteContainerDialogTriggerButton } from './DeleteContainerDialogTriggerButton';

interface IContainerCardDropdownMenuContent {
  /**
   * The function to open rename form input field
   */
  onRenameClick: () => void;

  onDropdownMenuClose: () => void;
}

export const ContainerCardDropdownMenuContent = ({
  onRenameClick,
  onDropdownMenuClose,
}: IContainerCardDropdownMenuContent) => {
  const handleSelect = (evt: Event) => {
    evt.preventDefault();
  };
  return (
    <DropdownMenuContent>
      <DropdownMenuItem asChild>
        <DropdownMenuButton onClick={onRenameClick}>
          <DropdownMenuButtonIcon>
            <Icon icon={IconPen} size={5} color="primary" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
      <DropdownMenuItem onSelect={handleSelect}>
        <DeleteContainerDialogTriggerButton onDropdownMenuClose={onDropdownMenuClose} />
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
