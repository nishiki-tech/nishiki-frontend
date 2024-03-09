import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

interface ILogoutDialogContentProps {
  /**
   * The function to close the parent UI component.
   */
  onParentClose?: () => void;
}

export const LogoutDialogContent = ({ onParentClose }: ILogoutDialogContentProps) => {
  /**
   * Handle the cancel button click.
   * It closes the parent UI component, if specified
   */
  const handleCancel = () => {
    onParentClose?.();
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
        <Button variant="danger-outline" size="sm" onClick={handleLogout}>
          Log Out
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
