import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui';
import { IGroup } from '@/types/definition';

import { DeleteGroupDialogTriggerButton } from './DeleteGroupDialogTriggerButton';
import { RenameGroupDrawerTriggerButton } from './RenameGroupDrawerTriggerButton';

export const GroupSingleHeaderDropdownMenuContent = ({
  groupId,
  onDropdownMenuClose,
}: {
  groupId: IGroup['id'];
  onDropdownMenuClose: () => void;
}) => {
  const handleSelect = (e: Event) => {
    e.preventDefault();
  };
  return (
    <DropdownMenuContent>
      <DropdownMenuItem>
        <RenameGroupDrawerTriggerButton />
      </DropdownMenuItem>
      <DropdownMenuItem onSelect={handleSelect}>
        <DeleteGroupDialogTriggerButton groupId={groupId} onParentClose={onDropdownMenuClose} />
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
