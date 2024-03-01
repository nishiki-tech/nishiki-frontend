import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { removeContainer } from '@/features/groups/lib/actions';
import { IContainer } from '@/types/definition';

interface IDeleteContainerDialogContentProps {
  /**
   * An identifier of a container which a user is willing to delete
   */
  containerId: IContainer['id'];
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
  containerId,
  onParentClose,
  onDialogClose,
}: IDeleteContainerDialogContentProps) => {
  /**
   * The function to handle when delete button clicked
   */
  const handleDelete = async () => {
    const result = await removeContainer(containerId);
    if (!result.ok) {
      alert('Something went wrong. Please try again.');
    } else {
      alert('Successfully deleted');
    }
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
