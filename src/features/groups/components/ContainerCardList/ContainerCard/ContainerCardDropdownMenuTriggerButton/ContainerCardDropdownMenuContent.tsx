import { DeleteIcon, PenIcon } from '@/assets/images/icons';
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
  handleRenameClick: () => void;
}

export const ContainerCardDropdownMenuContent = ({
  handleRenameClick,
}: IContainerCardDropdownMenuContent) => {
  return (
    <DropdownMenuContent>
      <DropdownMenuItem asChild>
        <DropdownMenuButton onClick={handleRenameClick}>
          <DropdownMenuButtonIcon>
            <Icon icon={PenIcon} size={5} color="primary" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <DropdownMenuButton>
          <DropdownMenuButtonIcon>
            <Icon icon={DeleteIcon} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
