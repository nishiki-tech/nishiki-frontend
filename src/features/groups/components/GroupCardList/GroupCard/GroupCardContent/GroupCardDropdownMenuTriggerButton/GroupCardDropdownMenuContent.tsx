import { DeleteIcon, PenIcon } from '@/assets/images/icons';
import {
  DialogTrigger,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  DropdownMenuContent,
  DropdownMenuItem,
  Icon,
} from '@/components/ui';

import { FC } from 'react';

interface IGroupCardDropdownMenuContentProps {
  handleRenameClick: () => void;
}

export const GroupCardDropdownMenuContent: FC<IGroupCardDropdownMenuContentProps> = ({
  handleRenameClick,
}) => {
  return (
    <DropdownMenuContent>
      <DropdownMenuItem asChild>
        <DropdownMenuButton onClick={handleRenameClick}>
          <DropdownMenuButtonIcon>
            <Icon icon={PenIcon} size={5} color="primary" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        {/* Wrapping delete button with DialogTrigger to open the dialog in parent component*/}
        <DialogTrigger asChild>
          <DropdownMenuButton>
            <DropdownMenuButtonIcon>
              <Icon icon={DeleteIcon} size={5} color="danger" />
            </DropdownMenuButtonIcon>
            <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
          </DropdownMenuButton>
        </DialogTrigger>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
