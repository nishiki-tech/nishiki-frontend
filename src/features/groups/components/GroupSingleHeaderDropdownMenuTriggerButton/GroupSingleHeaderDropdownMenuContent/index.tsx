import { IconPen } from '@/assets/images/icons';
import {
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  DropdownMenuContent,
  DropdownMenuItem,
  Icon,
} from '@/components/ui';
// import { useRenameGroupContext } from '@/features/groups/hooks/useRenameGroupProvider';
import { IGroup } from '@/types/definition';

import { DeleteGroupDialogTriggerButton } from './DeleteGroupDialogTriggerButton';
// import { RenameGroupDrawerTriggerButton } from './RenameGroupDrawerTriggerButton';

interface IGroupSingleHeaderDropdownMenuContent {
  /**
   * an identifier of a group which a user is willing to either delete or rename
   */
  groupId: IGroup['id'];
  /**
   * The current group name which a user is willing to change
   */
  currentGroupName: IGroup['name'];
  /**
   * Function to close this dropdown menu
   */
  onDropdownMenuClose: () => void;
  onRenameGroupDrawerOpen: () => void;
}

export const GroupSingleHeaderDropdownMenuContent = ({
  groupId,
  // currentGroupName,
  onDropdownMenuClose,
  onRenameGroupDrawerOpen,
}: IGroupSingleHeaderDropdownMenuContent) => {
  // const { setIsRenameGroupDrawerOpen } = useRenameGroupContext();

  const handleRenameClick = () => {
    onRenameGroupDrawerOpen();
  };

  /**
   * The function that is called when the dropdown menu item is selected.
   * e.preventDefault() prevents the dropdown menu from closing when selecting that item.
   * This is necessary because closing dropdown menu also closes the dialog unintentionally.
   * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item}
   * @param e - The event object
   * @returns void
   */
  const handleSelect = (e: Event) => {
    e.preventDefault();
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
      <DropdownMenuItem onSelect={handleSelect}>
        <DeleteGroupDialogTriggerButton groupId={groupId} onParentClose={onDropdownMenuClose} />
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
