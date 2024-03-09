import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui';
import { IGroup } from '@/types/definition';

import { DeleteGroupDialogTriggerButton } from './DeleteGroupDialogTriggerButton';
import { RenameGroupDrawerTriggerButton } from './RenameGroupDrawerTriggerButton';

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
}

export const GroupSingleHeaderDropdownMenuContent = ({
  groupId,
  currentGroupName,
  onDropdownMenuClose,
}: IGroupSingleHeaderDropdownMenuContent) => {
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
      <DropdownMenuItem onSelect={handleSelect}>
        <RenameGroupDrawerTriggerButton
          groupId={groupId}
          currentGroupName={currentGroupName}
          onParentClose={onDropdownMenuClose}
        />
      </DropdownMenuItem>
      <DropdownMenuItem onSelect={handleSelect}>
        <DeleteGroupDialogTriggerButton groupId={groupId} onParentClose={onDropdownMenuClose} />
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
