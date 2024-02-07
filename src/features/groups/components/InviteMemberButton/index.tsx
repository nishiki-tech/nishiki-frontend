'use client';

import { LinkIcon, PlusIcon } from '@/assets/images/icons';
import {
  Button,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Icon,
} from '@/components/ui';

import { useState } from 'react';

export const InviteMemberButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCopyDisabled, setIsCopyDisabled] = useState(false);

  const handleLinkCopy = () => {
    setIsCopyDisabled(true);
  };
  const handleTextChange = (isClicked: boolean) => {
    return isClicked ? 'Copied!' : 'Copy Link';
  };

  return (
    <>
      <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="flex justify-center items-center w-12 h-12">
            <Icon icon={PlusIcon} size={4.5} />
          </Button>
        </DialogTrigger>
        <DialogContent className="h-44 w-11/12">
          <DialogHeader>
            <DialogTitle>Invite users</DialogTitle>
          </DialogHeader>
          <DialogBody className="flex justify-center">
            <Button
              disabled={isCopyDisabled}
              variant="primary"
              size={'lg'}
              onClick={handleLinkCopy}
            >
              <Icon icon={LinkIcon} size={5} color={'white'} />
              {handleTextChange(isCopyDisabled)}
            </Button>
          </DialogBody>
          <DialogDescription className="text-center text-sm text-gray-dark">
            Your invite link expires in a day.
          </DialogDescription>
        </DialogContent>
      </DialogRoot>
    </>
  );
};
