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

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IDeleteContainerDialogContentProps {
  /**
   * An identifier of a container which a user is willing to delete
   */
  containerId: IContainer['id'];
  /**
   * The function to close parent UI component
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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  /**
   * Handle the cancel button click.
   * It closes the parent UI component, if specified
   */
  const handleCancel = () => {
    onParentClose();
  };

  /**
   * Handle the delete button click.
   * If the DELETE request is successful, show a success message, and if failed, show an error message
   * the dialog and dropdown menu will be disappeared after processing either case
   */
  const handleDelete = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const result = await removeContainer(containerId);
    if (!result.ok) {
      alert('Something went wrong. Please try again.');
      onDialogClose();
      onParentClose();
      setIsLoading(false);
    } else {
      alert('Successfully deleted');
      onDialogClose();
      onParentClose();
      setIsLoading(false);
      router.refresh();
    }
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
          <Button type="button" variant="cancel" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogClose>
        <Button variant="danger" size="sm" onClick={handleDelete} disabled={isLoading}>
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
