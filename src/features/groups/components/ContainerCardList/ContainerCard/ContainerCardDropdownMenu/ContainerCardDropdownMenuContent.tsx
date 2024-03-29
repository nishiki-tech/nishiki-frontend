import { IconDelete, IconPen } from '@/assets/images/icons';
import {
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  DropdownMenuContent,
  DropdownMenuItem,
  Icon,
} from '@/components/ui';

interface IContainerCardDropdownMenuContent {
  /**
   * The function to open rename form input field
   */
  onRenameContainerClick: () => void;
  /**
   * The function to close dropdown menu
   */
  onDeleteContainerDialogOpen: () => void;
}

export const ContainerCardDropdownMenuContent = ({
  onRenameContainerClick,
  onDeleteContainerDialogOpen,
}: IContainerCardDropdownMenuContent) => {
  return (
    <DropdownMenuContent>
      <DropdownMenuItem asChild>
        <DropdownMenuButton onClick={onRenameContainerClick}>
          <DropdownMenuButtonIcon>
            <Icon icon={IconPen} size={5} color="primary" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <DropdownMenuButton onClick={onDeleteContainerDialogOpen}>
          <DropdownMenuButtonIcon>
            <Icon icon={IconDelete} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
