'use client';

import { PlusIcon } from '@/assets/images/icons';
import { Button, DialogRoot, DialogTrigger, Icon } from '@/components/ui';

import { useState } from 'react';

import { InviteMemberDialogContent } from './InviteMemberDialogContent';

export const InviteMemberDialog = ({ groupId }: { groupId: string }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="flex justify-center items-center w-12 h-12">
            <Icon icon={PlusIcon} size={4.5} />
          </Button>
        </DialogTrigger>
        <InviteMemberDialogContent isDialogOpen={isDialogOpen} groupId={groupId} />
      </DialogRoot>
    </>
  );
};
