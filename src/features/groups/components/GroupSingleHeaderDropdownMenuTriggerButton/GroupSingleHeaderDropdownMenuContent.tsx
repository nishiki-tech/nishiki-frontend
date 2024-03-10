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
  return (
    <DropdownMenuContent>
      <DropdownMenuItem>
        <DropdownMenuButton onClick={onRenameGroupDrawerOpen}>
          <DropdownMenuButtonIcon>
            <Icon icon={IconPen} size={5} color="primary" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
      <DropdownMenuItem>
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
