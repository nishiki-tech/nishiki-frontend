import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { IUser } from '@/types/definition';

interface ILogoutDialogContentProps {
  /**
   * The ID of the user to delete.
   */
  userId: IUser['id'];
  /**
   * The function to close the parent UI component.
   */
  onParentClose?: () => void;
  /**
   * The function to close this delete dialog.
   */
  onDialogClose: () => void;
  /**
   * The function to navigate the user to a different page
   */
  navigateOnSuccess?: () => void;
}

export const LogoutDialogContent = ({
  onParentClose,
  onDialogClose,
}: ILogoutDialogContentProps) => {
  /**
   * Handle the cancel button click.
   * It closes the parent UI component, if specified
   */
  const handleCancel = () => {
    onParentClose?.();
  };
  /**
   * Handle the delete button click.
   * If the DELETE request is successful, show a success message, close the dialog and drawer, and navigate to a different page if the function is passed from parent
   * If the DELETE request is failed, show an error message and close the dialog.
   * @returns void
   */
  const handleDelete = async () => {
    onParentClose?.();
    onDialogClose();
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete User</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>Are you sure you want to delete this user?</p>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="cancel" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogClose>
        <Button variant="error" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
