import { LinkIcon } from '@/assets/images/icons';
import {
  Button,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Icon,
} from '@/components/ui';

import { useEffect, useState } from 'react';

export const InviteMemberDialogContent = ({ isDialogOpen }: { isDialogOpen: boolean }) => {
  const [isCopyDisabled, setIsCopyDisabled] = useState(false);

  const handleLinkCopy = () => {
    setIsCopyDisabled(true);
  };

  useEffect(() => {
    setTimeout(() => setIsCopyDisabled(false), 200);
  }, [isDialogOpen]);

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite users</DialogTitle>
        </DialogHeader>
        <DialogBody className="flex flex-col gap-4 justify-center items-center pb-8">
          <Button
            disabled={isCopyDisabled}
            variant="primary"
            size="lg"
            onClick={handleLinkCopy}
            className="w-40 px-3.5"
          >
            <Icon icon={LinkIcon} size={5} color="white" />
            {isCopyDisabled ? 'Copied!' : 'Copy link'}
          </Button>
          <p className="text-center text-sm text-gray-dark">Your invite link expires in a day.</p>
        </DialogBody>
      </DialogContent>
    </>
  );
};
