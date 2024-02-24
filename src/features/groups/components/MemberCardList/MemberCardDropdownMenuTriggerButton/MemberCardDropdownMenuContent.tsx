'use client';

import { DeleteIcon } from '@/assets/images/icons';
import {
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  DropdownMenuContent,
  DropdownMenuItem,
  Icon,
} from '@/components/ui';

export const MemberCardDropdownMenuContent = ({}) => {
  return (
    <DropdownMenuContent>
      <DropdownMenuItem asChild>
        <DropdownMenuButton
          onClick={() => {
            console.log('delete');
          }}
        >
          <DropdownMenuButtonIcon>
            <Icon icon={DeleteIcon} size={5} color="danger" />
          </DropdownMenuButtonIcon>
          <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
        </DropdownMenuButton>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
