import { DeleteIcon, PenIcon } from '@/assets/images/icons';
import {
  Icon,
  SelectionDrawerButton,
  SelectionDrawerButtonIcon,
  SelectionDrawerButtonText,
  SelectionDrawerContent,
  SelectionDrawerRoot,
} from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import { Dispatch, FC, SetStateAction } from 'react';

interface IRenameAndDeleteSelectionDrawerProps {
  isOpen: boolean;
  target: string;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onRenameClick: () => void;
  onDeleteClick: () => void;
}

export const RenameAndDeleteSelectionDrawer: FC<IRenameAndDeleteSelectionDrawerProps> = ({
  isOpen,
  target,
  onOpenChange,
  onRenameClick,
  onDeleteClick,
}) => {
  const messageForRename = `Rename ${target}`;
  const messageForDelete = `Delete ${target}`;
  return (
    <>
      <SelectionDrawerRoot open={isOpen} onOpenChange={onOpenChange}>
        <SelectionDrawerContent>
          <SelectionDrawerButton onClick={onRenameClick}>
            <SelectionDrawerButtonIcon>
              <Icon icon={PenIcon} size={5} color="primary" />
            </SelectionDrawerButtonIcon>
            <SelectionDrawerButtonText>{messageForRename}</SelectionDrawerButtonText>
          </SelectionDrawerButton>
          <SelectionDrawerButton
            className={cn('border-t border-gray-light')}
            onClick={onDeleteClick}
          >
            <SelectionDrawerButtonIcon>
              <Icon icon={DeleteIcon} size={5} color="danger" />
            </SelectionDrawerButtonIcon>
            <SelectionDrawerButtonText>{messageForDelete}</SelectionDrawerButtonText>
          </SelectionDrawerButton>
        </SelectionDrawerContent>
      </SelectionDrawerRoot>
    </>
  );
};
