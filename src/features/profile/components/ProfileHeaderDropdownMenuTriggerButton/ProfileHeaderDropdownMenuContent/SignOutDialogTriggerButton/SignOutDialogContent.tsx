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
   * Handle the logout button click.
   * @returns void
   */
  const handleLogout = async () => {
    alert('log out');
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Log Out</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>Are you sure you want to log out?</p>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="cancel" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogClose>
        <Button variant="error-outline" size="sm" onClick={handleLogout}>
          Log Out
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
