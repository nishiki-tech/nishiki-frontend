import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui';

import { DeleteUserDialogTriggerButton } from './DeleteUserDialogTriggerButton';
import { LogoutDialogTriggerButton } from './LogoutDialogTriggerButton';

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

  return (
    <DropdownMenuContent alignOffset={16}>
      <DropdownMenuItem onSelect={handleSelect}>
        <LogoutDialogTriggerButton onParentClose={() => {}} />
      </DropdownMenuItem>
      <DropdownMenuItem onSelect={handleSelect}>
        <DeleteUserDialogTriggerButton onParentClose={onDropdownMenuClose} />
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
