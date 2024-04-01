import { IconDelete, IconPen } from '@/assets/images/icons';
import {
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  DropdownMenuContent,
  DropdownMenuItem,
  Icon,
} from '@/components/ui';

interface IGroupCardDropdownMenuContentProps {
  /**
   * Function to handle the rename button click.
   */
  handleRenameClick: () => void;

  /**
   * The function to close the dropdown menu.
   */
  onDropdownMenuClose: () => void;
}

export const GroupCardDropdownMenuContent = ({
  handleRenameClick,
  onDropdownMenuClose,
}: IGroupCardDropdownMenuContentProps) => {
  /**
   * The function that is called when the dropdown menu item is selected.
   * e.preventDefault() prevents the dropdown menu from closing when selecting that item.
   * This is necessary because closing dropdown menu also closes the dialog unintentionally.
   * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item}
   *
   * @param e - The event object
   * @returns void
   */
  const handleSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onDropdownMenuClose();
  };

  return (
    <DropdownMenuContent>
      <DropdownMenuItem>
        <DropdownMenuButton onClick={handleRenameClick}>
          <DropdownMenuButtonIcon>
            <Icon icon={IconPen} size={5} color="primary" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <DropdownMenuButton onClick={(e) => handleSelect(e)}>
          <DropdownMenuButtonIcon>
            <Icon icon={IconDelete} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
