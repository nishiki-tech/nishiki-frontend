/**
 * This file is an example usage of the MobileLayout component.
 * You can use this file as a reference when you need to use the MobileLayout component.
 *
 * This component can be used for testing by placing at the root level of a page.tsx component,
 * located within the `src/app/` directory.
 */

'use client';

import { IconDelete, IconPen } from '@/assets/images/icons';
import { MobileLayout } from '@/components/layouts/MobileLayout';
import { HeaderBackButton, HeaderMenuCircleButton } from '@/components/parts/Header';
import {
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
        <HeaderMenuCircleButton />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
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
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
