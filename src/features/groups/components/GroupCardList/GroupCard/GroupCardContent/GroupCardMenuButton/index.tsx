'use client';
import { DeleteIcon, MenuKebabIcon, PenIcon } from '@/assets/images/icons';
import {
  Button,
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
} from '@/components/ui';

import { FC } from 'react';
interface IGroupCardMenuButtonProps {
  handleRenameClick: () => void;
}

export const GroupCardMenuButton: FC<IGroupCardMenuButtonProps> = ({ handleRenameClick }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12" onFocus={() => console.log('button focused')}>
          <Icon icon={MenuKebabIcon} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
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
          <DropdownMenuButton onClick={() => {}}>
            <DropdownMenuButtonIcon>
              <Icon icon={DeleteIcon} size={5} color="danger" />
            </DropdownMenuButtonIcon>
            <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
          </DropdownMenuButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
