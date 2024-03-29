import { IconDelete, IconPen } from '@/assets/images/icons';
import {
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  DropdownMenuContent,
  DropdownMenuItem,
  Icon,
} from '@/components/ui';

interface IGroupSingleHeaderDropdownMenuContent {
  /**
   * The function to open the RenameGroupDrawer
   */
  onRenameGroupDrawerOpen: () => void;
  /**
   * The function to open the DeleteGroupDialog
   */
  onDeleteGroupDialogOpen: () => void;
}

export const GroupSingleHeaderDropdownMenuContent = ({
  onRenameGroupDrawerOpen,
  onDeleteGroupDialogOpen,
}: IGroupSingleHeaderDropdownMenuContent) => {
  /**
   * The offset to align the dropdown menu content with the trigger button.
   * The number 16 is based on the side padding in the body element.
   */
  const dropdownMenuAlignOffset = 16;
  return (
    <DropdownMenuContent alignOffset={dropdownMenuAlignOffset}>
      <DropdownMenuItem asChild>
        <DropdownMenuButton onClick={onRenameGroupDrawerOpen}>
          <DropdownMenuButtonIcon>
            <Icon icon={IconPen} size={5} color="primary" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <DropdownMenuButton onClick={onDeleteGroupDialogOpen}>
          <DropdownMenuButtonIcon>
            <Icon icon={IconDelete} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
