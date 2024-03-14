'use client';

import { IconPlus } from '@/assets/images/icons';
import { Button, DialogRoot, DialogTrigger, Icon } from '@/components/ui';
import { IGroup } from '@/types/definition';

import { useState } from 'react';

import { InviteMemberDialogContent } from './InviteMemberDialogContent';

interface IInviteMemberDialogProps {
  /**
   * an identifier of a group which is passed to child component
   */
  groupId: IGroup['id'];
}

export const InviteMemberDialog = ({ groupId }: IInviteMemberDialogProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="flex justify-center items-center w-12 h-12">
            <Icon icon={IconPlus} size={4.5} />
          </Button>
        </DialogTrigger>
        <InviteMemberDialogContent isDialogOpen={isDialogOpen} groupId={groupId} />
      </DialogRoot>
    </>
  );
};
