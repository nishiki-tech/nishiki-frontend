'use client';
/**
 * This file is used as an example for the Dropdown components.
 * Once we're done with the example, we can delete this file.
 */
import { IconDelete, IconMenuKebab, IconPen } from '@/assets/images/icons';
import { ContainerCount } from '@/features/groups/components/GroupCardList/GroupCard/GroupCardContent/ContainerCount';
import { UserCount } from '@/features/groups/components/GroupCardList/GroupCard/GroupCardContent/UserCount';

import {
  Button,
  Card,
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuButtonIcon,
  DropdownMenuButtonText,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
} from '.';

export const DropdownMenuUsageExample = () => {
  return (
    <div className="p-4 flex flex-col gap-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <DropDownMenuWithCardExample key={i} />
      ))}
    </div>
  );
};

const DropDownMenuWithCardExample = () => {
  const handleRenameClick = () => {
    alert('Rename clicked!');
  };

  const handleDeleteClick = () => {
    alert('Delete clicked!');
  };
  return (
    <Card asChild>
      <div className="flex justify-between gap-2">
        <div className="flex grow flex-col gap-3 pl-4 py-2">
          <span className="text-lg leading-6">Group name</span>
          <div className="w-full flex justify-between items-center">
            <ContainerCount containerCount={3} />
            <UserCount userCount={3} />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-12">
              <Icon icon={IconMenuKebab} size={4.5} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <DropdownMenuButton onClick={handleRenameClick}>
                <DropdownMenuButtonIcon>
                  <Icon icon={IconPen} size={5} color="primary" />
                </DropdownMenuButtonIcon>
                <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
              </DropdownMenuButton>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <DropdownMenuButton onClick={handleDeleteClick}>
                <DropdownMenuButtonIcon>
                  <Icon icon={IconDelete} size={5} color="danger" />
                </DropdownMenuButtonIcon>
                <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
              </DropdownMenuButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
};
