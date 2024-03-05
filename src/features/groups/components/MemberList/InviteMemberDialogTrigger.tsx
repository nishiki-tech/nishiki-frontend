'use client';
import { IconPlus } from '@/assets/images/icons';
import { Button, DialogRoot, DialogTrigger, Icon } from '@/components/ui';
import { IGroup } from '@/types/definition';

import { useState } from 'react';

import { InviteMemberDialogContent } from '../InviteMemberDialog/InviteMemberDialogContent';

interface IInviteMemberDialogTriggerProps {
  /**
   * An identifier of a group which a new invited user will belong to
   */
  groupId: IGroup['id'];
}

export const InviteMemberDialogTrigger = ({ groupId }: IInviteMemberDialogTriggerProps) => {
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
