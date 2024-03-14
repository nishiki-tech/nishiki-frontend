import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui';

import { DeleteAccountDialogTriggerButton } from './DeleteAccountDialogTriggerButton';
import { SignOutDialogTriggerButton } from './SignOutDialogTriggerButton';

interface IProfileHeaderDropdownMenuContentProps {
  /**
   * Function to close this dropdown menu
   */
  onDropdownMenuClose: () => void;
}

export const ProfileHeaderDropdownMenuContent = ({
  onDropdownMenuClose,
}: IProfileHeaderDropdownMenuContentProps) => {
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

  /**
   * The offset to align the dropdown menu content with the trigger button.
   * The number 16 is based on the side padding in the body element.
   */
  const dropdownMenuAlignOffset = 16;

  return (
    <DropdownMenuContent alignOffset={dropdownMenuAlignOffset}>
      <DropdownMenuItem onSelect={handleSelect}>
        <SignOutDialogTriggerButton onParentClose={onDropdownMenuClose} />
      </DropdownMenuItem>
      <DropdownMenuItem onSelect={handleSelect}>
        <DeleteAccountDialogTriggerButton onParentClose={onDropdownMenuClose} />
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
