import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

interface IDeleteContainerDialogContentProps {
  /**
   * The function to close parent UI which is dropdownMenu
   */
  onParentClose: () => void;
  /**
   * The function to close this dialog
   */
  onDialogClose: () => void;
}

export const DeleteContainerDialogContent = ({
  onParentClose,
  onDialogClose,
}: IDeleteContainerDialogContentProps) => {
  /**
   * The function to handle when delete button clicked
   */
  const handleDelete = () => {
    onDialogClose();
    onParentClose();
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Container</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>Are you sure you want to delete the container?</p>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="cancel" size="sm" onClick={onParentClose}>
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
