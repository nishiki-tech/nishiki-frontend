'use client';

import { PlusIcon } from '@/assets/images/icons';
import {
  Button,
  DialogBody,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Icon,
} from '@/components/ui';

import { useState } from 'react';

export const InviteMemberButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleCopy = () => {
    alert('link copied');
  };

  return (
    <>
      <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
          <Button className="flex justify-center items-center w-12 h-12">
            <Icon icon={PlusIcon} size={4.5} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invite users</DialogTitle>
          </DialogHeader>
          <DialogBody className="flex justify-center">
            <Button variant="primary" onClick={handleCopy}>
              Copy link
            </Button>
          </DialogBody>
          <DialogDescription>
            <p>Your invite link expires in a day.</p>
          </DialogDescription>
        </DialogContent>
      </DialogRoot>
    </>
  );
};
