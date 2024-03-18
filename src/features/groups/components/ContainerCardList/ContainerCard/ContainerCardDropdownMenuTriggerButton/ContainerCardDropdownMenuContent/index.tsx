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
  onRenameClick: () => void;
  /**
   * The function to close dropdown menu
   */
  onDropdownMenuClose: () => void;
  /**
   * The function to close dropdown menu
   */
  onDeleteContainerDialogOpen: () => void;
}

export const ContainerCardDropdownMenuContent = ({
  onRenameClick,
  onDeleteContainerDialogOpen,
}: IContainerCardDropdownMenuContent) => {
  /**
   * The function that is called when the dropdown menu is selected
   * e.preventDefault() prevents the dropdown menu from closing when selecting that item
   * This is necessary because closing dropdown menu also closes the dialog unintentionally
   * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item}
   * @param e - The event object
   * @returns void
   * */
  // const handleSelect = (e: Event) => {
  //   e.preventDefault();
  // };

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
