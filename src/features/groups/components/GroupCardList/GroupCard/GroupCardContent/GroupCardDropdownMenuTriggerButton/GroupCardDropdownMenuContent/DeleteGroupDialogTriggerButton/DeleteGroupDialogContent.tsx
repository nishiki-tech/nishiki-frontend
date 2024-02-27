import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

interface IDeleteGroupDialogContentProps {
  /**
   * If true, close the parent UI component, such as Dialog, DropdownMenu, Drawer, etc., on cancel button click.
   */
  closeParentOnCancel?: boolean;
  /**
   * The function to close the parent UI component.
   */
  onParentClose?: () => void;
  /**
   * The function to close this delete dialog.
   */
  onDialogClose: () => void;
}

export const DeleteGroupDialogContent = ({
  closeParentOnCancel = true,
  onParentClose,
  onDialogClose,
}: IDeleteGroupDialogContentProps) => {
  /**
   * Handle the cancel button click.
   * If the parentClose is true, close the parent dialog together with this dialog.
   * If the parentClose is false, close only this dialog.
   * @returns void
   */
  const handleCancel = () => {
    closeParentOnCancel && onParentClose?.();
  };

  /**
   * Handle the delete button click.
   * If the DELETE request is successful, show a success message and close the dialog and drawer.
   * If the DELETE request is failed, show an error message and close the dialog.
   * @returns void
   */
  const handleDelete = async () => {
    alert('delete');
    onDialogClose();
    onParentClose?.();
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Group</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>Are you sure you want to delete this group?</p>
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
