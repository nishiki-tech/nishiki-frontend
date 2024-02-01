'use client';
/**
 * This file is used as an example for the Dropdown components.
 * Once we're done with the example, we can delete this file.
 */
import { DeleteIcon, MenuKebabIcon, PenIcon } from '@/assets/images/icons';
import { ContainerCount } from '@/features/groups/components/GroupCardList/ContainerCount';
import { UserCount } from '@/features/groups/components/GroupCardList/UserCount';
import { cn } from '@/lib/tailwind/utils';

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
      <div className="flex items-center justify-between pl-4 py-2 pr-0">
        <div className="w-[calc(100%-3.5rem)] flex flex-col gap-3">
          <span className="text-lg">Group name</span>
          <div className="w-full flex justify-between items-center">
            <ContainerCount containerCount={3} />
            <UserCount userCount={3} />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Icon icon={MenuKebabIcon} size={4.5} />
            </Button>
          </DropdownMenuTrigger>
          {/* You have to adjust it's horizontal position by adding margin */}
          <DropdownMenuContent className="mr-4">
            <DropdownMenuItem>
              <DropdownMenuButton onClick={handleRenameClick}>
                <DropdownMenuButtonIcon>
                  <Icon icon={PenIcon} size={5} color="primary" />
                </DropdownMenuButtonIcon>
                <DropdownMenuButtonText>Rename</DropdownMenuButtonText>
              </DropdownMenuButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {' '}
              <DropdownMenuButton
                className={cn('border-t border-gray-light')}
                onClick={handleDeleteClick}
              >
                <DropdownMenuButtonIcon>
                  <Icon icon={DeleteIcon} size={5} color="danger" />
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
