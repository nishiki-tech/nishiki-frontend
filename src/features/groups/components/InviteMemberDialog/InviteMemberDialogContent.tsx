import { IconLink } from '@/assets/images/icons';
import {
  Button,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Icon,
} from '@/components/ui';
import { putGenerateInvitationLinkHash } from '@/lib/api/group/client/groupApiClient.client';
import { IGroup } from '@/types/definition';

import { useEffect, useState } from 'react';

const CLIENT_BASE_URL = process.env.NEXT_PUBLIC_CLIENT_BASE_URL || '';

interface IInviteMemberDialogContentProps {
  /**
   * State to control the the dialog,true means open, false is closed.
   */
  isDialogOpen: boolean;
  /**
   * an identifier of a group which an invited user will belong to
   */
  groupId: IGroup['id'];
}

export const InviteMemberDialogContent = ({
  isDialogOpen,
  groupId,
}: IInviteMemberDialogContentProps) => {
  const [isLinkButtonClicked, setIsLinkButtonClicked] = useState(false);
  const [isHash, setHash] = useState('');

  /**
   * This useEffect is fired when the `isDialogOpen` state is changed(true/false). if true, the setup is fired.
   * generating the invitation link hash and put it as state `isHash`
   */
  useEffect(() => {
    const getHash = async () => {
      if (isDialogOpen) {
        const result = await putGenerateInvitationLinkHash(groupId);
        if (!result.ok) {
          alert('Something went wrong. Please try again');
          return;
        }
        setHash(result.value.invitationLinkHash);
      }
    };
    getHash();
  }, [isDialogOpen, groupId]);
  /**
   * Handle the link copy button click.
   * If success, generated invitation link URL is copied to clipboard and change the text of button to 'Copied!'
   * *hash is already generated when the dialog open
   */
  const handleLinkCopy = async () => {
    setIsLinkButtonClicked(true);
    try {
      return await navigator.clipboard.writeText(`${CLIENT_BASE_URL}/groups/join/${isHash}`);
    } catch (err) {
      console.error(
        'Error occurred while copying the link:',
        err instanceof Error ? err.message : err,
      );
      alert('Error occurred while copying the link. Please try again.');
    }
    setHash('');
    return;
  };

  /**
   * this is React Hook useEffect which changes the state of `isLinkButtonClicked` to false if the state of `isDialogOpen` changes
   *
   * `seTimeout` which enables you to change the state of `setIsLinkButtonClicked` to false 0.3 sec after the dependency change
   * The `setTimeout` is needed to remain text "copied" until the dialog disappears in order. Without it, the text would've change to "Copy Link" before dialog disappears.
   * the duration 0.3 is same as fadeIn/fadeOut ruled at `tailwind.config.ts`
   * dependency: the parameter of `InviteMemberDialogContent` which is checking the state of Dialog whether it's open/close(=true/false)
   */
  useEffect(() => {
    setTimeout(() => setIsLinkButtonClicked(false), 300);
  }, [isDialogOpen]);

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite users</DialogTitle>
        </DialogHeader>
        <DialogBody className="flex flex-col gap-4 justify-center items-center pb-8">
          <Button
            disabled={isLinkButtonClicked}
            variant="primary"
            size="lg"
            onClick={handleLinkCopy}
            className="w-40 px-3.5"
          >
            <Icon icon={IconLink} size={5} color="white" />
            {isLinkButtonClicked ? 'Copied!' : 'Copy link'}
          </Button>
          <p className="text-center text-sm text-gray-dark">Your invite link expires in a day.</p>
        </DialogBody>
      </DialogContent>
    </>
  );
};
