/**
 * This file is an example usage of the MobileLayout component.
 * You can use this file as a reference when you need to use the MobileLayout component.
 *
 * This component should be used at the root level of a page component,
 * located in the "src/components/page/" directory.
 */

'use client';

import { DeleteIcon, MenuCircleIcon, PenIcon } from '@/assets/images/icons';
import { MobileLayout } from '@/components/layouts/MobileLayout';
import { HeaderBackButton } from '@/components/parts/Header';
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

import { DropdownMenuPortal } from '@radix-ui/react-dropdown-menu';

export const MobileLayoutUsageExample = () => {
  return (
    <MobileLayout
      heading="Groups"
      headerLeft={<HeaderBackButton href={{ pathname: '/groups' }} />}
      headerRight={<HeaderDropdownMenu />}
    >
      MobileLayoutUsageExample
    </MobileLayout>
  );
};

const HeaderDropdownMenu = () => {
  const handleRenameClick = () => {
    alert('Rename clicked!');
  };

  const handleDeleteClick = () => {
    alert('Delete clicked!');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Replacing this button with 'HeaderMenuCircleButton' causes this dropdown menu to stop working */}
        <Button className="h-full px-4 flex items-center">
          <Icon icon={MenuCircleIcon} size={6} color="black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
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
            <DropdownMenuButton onClick={handleDeleteClick}>
              <DropdownMenuButtonIcon>
                <Icon icon={DeleteIcon} size={5} color="danger" />
              </DropdownMenuButtonIcon>
              <DropdownMenuButtonText>Delete</DropdownMenuButtonText>
            </DropdownMenuButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
