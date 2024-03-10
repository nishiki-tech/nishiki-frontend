'use client';
import { HeaderMenuCircleButton } from '@/components/parts/Header';
import { DialogRoot, DrawerRoot, DropdownMenu, DropdownMenuTrigger } from '@/components/ui';
import { DeleteGroupDialogContent } from '@/features/groups/components/DeleteGroupDialogContent';
import { useAutoFocus } from '@/hooks';
import { IGroup } from '@/types/definition';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { GroupSingleHeaderDropdownMenuContent } from './GroupSingleHeaderDropdownMenuContent';
import { RenameGroupDrawerContent } from './RenameGroupDrawerContent';

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
  const [isRenameGroupDrawerOpen, setIsRenameGroupDrawerOpen] = useState(false);
  const [isDeleteGroupDialogOpen, setIsDeleteGroupDialogOpen] = useState(false);

  const meatballRef = useAutoFocus<HTMLButtonElement>(
    !isRenameGroupDrawerOpen && !isDeleteGroupDialogOpen,
  );

  const router = useRouter();

  /**
   * Function to transition to the GroupsPage
   */
  const navigateToGroupPage = () => {
    router.push('/groups');
  };

  return (
    <>
      {/* Meatball Button */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <HeaderMenuCircleButton ref={meatballRef} />
        </DropdownMenuTrigger>
        <GroupSingleHeaderDropdownMenuContent
          onRenameGroupDrawerOpen={() => setIsRenameGroupDrawerOpen(true)}
          onDeleteGroupDialogOpen={() => setIsDeleteGroupDialogOpen(true)}
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
      {/* Delete Group Dialog */}
      <DialogRoot open={isDeleteGroupDialogOpen} onOpenChange={setIsDeleteGroupDialogOpen}>
        <DeleteGroupDialogContent
          groupId={groupId}
          onDialogClose={() => setIsDeleteGroupDialogOpen(false)}
          navigateOnSuccess={navigateToGroupPage}
        />
      </DialogRoot>
    </>
  );
};
