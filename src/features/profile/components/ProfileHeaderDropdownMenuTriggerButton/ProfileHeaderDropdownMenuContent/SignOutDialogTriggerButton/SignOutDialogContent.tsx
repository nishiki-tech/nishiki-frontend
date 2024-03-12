import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

interface ISignOutDialogContentProps {
  /**
   * The function to close the parent UI component.
   */
  onParentClose: () => void;
}

export const SignOutDialogContent = ({ onParentClose }: ISignOutDialogContentProps) => {
  /**
   * Handle the cancel button click.
   * It closes the parent UI component.
   */
  const handleCancel = () => {
    onParentClose();
  };

  /**
   * Handle the SignOut button click.
   * @returns void
   */
  const handleSignOut = async () => {
    alert('sign out');
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
        <Button variant="danger-outline" size="sm" onClick={handleSignOut}>
          Sign out
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
