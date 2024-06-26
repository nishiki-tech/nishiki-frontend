import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

import { signOut } from 'aws-amplify/auth';
import { useState } from 'react';

interface ISignOutDialogContentProps {
  /**
   * The function to close the parent UI component.
   */
  onParentClose: () => void;
}

export const SignOutDialogContent = ({ onParentClose }: ISignOutDialogContentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  /**
   * Handle the cancel button click.
   * It closes the parent UI component.
   */
  const handleCancel = () => {
    onParentClose();
  };

  /**
   * Handle the SignOut button click.
   * Trigger the signOut() API from aws-amplify/auth.
   * @see {@link https://docs.amplify.aws/javascript/build-a-backend/auth/enable-sign-up/#sign-out}
   * @returns void
   */
  const handleSignOut = async () => {
    if (isLoading) return;
    setIsLoading(true);
    signOut();
    setIsLoading(false);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Sign out</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>Are you sure you want to sign out?</p>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="cancel" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogClose>
        <Button variant="danger-outline" size="sm" onClick={handleSignOut} disabled={isLoading}>
          Sign out
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
