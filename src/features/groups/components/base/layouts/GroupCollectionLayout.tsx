'use client';

import { MenuMeatballIcon, PlusIcon } from '@/assets/images/icons';
import { Button, Icon } from '@/components/ui';

import { FC, ReactNode, useState } from 'react';

import { CreateGroupDrawer, RenameAndDeleteSelectionDrawer } from '../parts';

interface IGroupCollectionLayoutProps {
  children: ReactNode;
}

export const GroupCollectionLayout: FC<IGroupCollectionLayoutProps> = ({ children }) => {
  const [isCreateGroupDrawerOpen, setIsCreateGroupDrawerOpen] = useState(false);
  const [isRenameAndDeleteSelectionDrawerOpen, setIsRenameAndDeleteSelectionDrawerOpen] =
    useState(false);
  const onMenuButtonClick = () => {
    setIsRenameAndDeleteSelectionDrawerOpen(true);
  };
  const onPlusButtonClick = () => {
    setIsCreateGroupDrawerOpen(true);
  };

  const onCloseCreateGroupDrawer = () => {
    setIsCreateGroupDrawerOpen(false);
  };
  // Temporary implementation. Will be replaced with the function to open RenameDrawer component.
  const onRenameClick = () => {
    alert('rename Drawer will open');
  };

  // Temporary implementation. Will be replaced with the function to open DeleteDrawer component.
  const onDeleteClick = () => {
    alert('delete Drawer will open');
  };

  const handleCreateGroup = () => {
    alert('create group');
  };
  return (
    <>
      <div className="h-12 w-full flex items-center justify-end gap-0.5">
        <Button variant="ghost" size="icon" onClick={onMenuButtonClick}>
          <Icon icon={MenuMeatballIcon} size={5} />
        </Button>
        <Button variant="ghost" size="icon" onClick={onPlusButtonClick}>
          <Icon icon={PlusIcon} size={4} />
        </Button>
      </div>
      <CreateGroupDrawer
        isOpen={isCreateGroupDrawerOpen}
        onOpenChange={setIsCreateGroupDrawerOpen}
        onClose={onCloseCreateGroupDrawer}
        onCreateClick={handleCreateGroup}
      />
      <RenameAndDeleteSelectionDrawer
        target="groups"
        isOpen={isRenameAndDeleteSelectionDrawerOpen}
        onOpenChange={setIsRenameAndDeleteSelectionDrawerOpen}
        onRenameClick={onRenameClick}
        onDeleteClick={onDeleteClick}
      />
      {children}
    </>
  );
};
