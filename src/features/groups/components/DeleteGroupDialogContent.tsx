import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { removeGroup } from '@/features/groups/lib/actions';
import { IGroup } from '@/types/definition';

import { useState } from 'react';

interface IDeleteGroupDialogContentProps {
  /**
   * The ID of the group to delete.
   */
  groupId: IGroup['id'];
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

export const DeleteGroupDialogContent = ({
  groupId,
  onParentClose,
  onDialogClose,
  navigateOnSuccess,
}: IDeleteGroupDialogContentProps) => {
  const [isLoading, setIsLoading] = useState(false);
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
    if (isLoading) return;
    setIsLoading(true);
    const result = await removeGroup(groupId);
    if (!result.ok) {
      alert('Something went wrong. Please try again.');
    } else {
      alert('Successfully deleted!');
      navigateOnSuccess?.();
    }
    setIsLoading(false);
    onParentClose?.();
    onDialogClose();
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
        <Button variant="danger" size="sm" onClick={handleDelete} disabled={isLoading}>
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
