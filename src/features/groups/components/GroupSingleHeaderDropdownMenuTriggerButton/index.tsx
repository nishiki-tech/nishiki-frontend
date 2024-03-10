'use client';
import { HeaderMenuCircleButton } from '@/components/parts/Header';
import { DrawerRoot, DropdownMenu, DropdownMenuTrigger } from '@/components/ui';
import { RenameGroupDrawerContent } from '@/features/groups/components/GroupSingleHeaderDropdownMenuTriggerButton/RenameGroupDrawerContent';
// import {
//   RenameGroupProvider,
//   useRenameGroupContext,
// } from '@/features/groups/hooks/useRenameGroupProvider';
import { IGroup } from '@/types/definition';

import { useState } from 'react';

import { GroupSingleHeaderDropdownMenuContent } from './GroupSingleHeaderDropdownMenuContent';

interface IGroupSingleHeaderDropdownMenuTriggerButton {
  /**
   * an identifier of a group which a user is willing to either delete or rename
   */
  groupId: IGroup['id'];
  /**
   * the current group name which a user is willing to change
   */
  currentGroupName: IGroup['name'];
}

export const GroupSingleHeaderDropdownMenuTriggerButton = ({
  groupId,
  currentGroupName,
}: IGroupSingleHeaderDropdownMenuTriggerButton) => {
  // const { isRenameGroupDrawerOpen, setIsRenameGroupDrawerOpen } = useRenameGroupContext();

  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isRenameGroupDrawerOpen, setIsRenameGroupDrawerOpen] = useState(false);

  return (
    <>
      {/* <RenameGroupProvider> */}
      {/* Meatball Button */}
      <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
        <DropdownMenuTrigger asChild>
          <HeaderMenuCircleButton />
        </DropdownMenuTrigger>
        <GroupSingleHeaderDropdownMenuContent
          groupId={groupId}
          currentGroupName={currentGroupName}
          onDropdownMenuClose={() => setIsDropdownMenuOpen(false)}
          onRenameGroupDrawerOpen={() => setIsRenameGroupDrawerOpen(true)}
        />
      </DropdownMenu>
      {/* Rename Group Drawer */}
      <DrawerRoot open={isRenameGroupDrawerOpen} onOpenChange={setIsRenameGroupDrawerOpen}>
        <RenameGroupDrawerContent
          groupId={groupId}
          currentGroupName={currentGroupName}
          onClose={() => setIsRenameGroupDrawerOpen(false)}
          isDrawerOpen={isRenameGroupDrawerOpen}
        />
      </DrawerRoot>
      {/* </RenameGroupProvider> */}
    </>
  );
};
