import {
  Button,
  Checkbox,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Label,
} from '@/components/ui';
import { removeUser } from '@/features/profile/lib/actions';
import { IUser } from '@/types/definition';

import { useState } from 'react';

interface IDeleteAccountDialogContentProps {
  /**
   * The ID of the user to delete.
   */
  userId: IUser['id'];
  /**
   * The function to close the parent UI component.
   */
  onParentClose: () => void;
}

export const DeleteAccountDialogContent = ({
  userId,
  onParentClose,
}: IDeleteAccountDialogContentProps) => {
  const [isChecked, setIsChecked] = useState(false);

  /**
   * Handle the cancel button click.
   * It closes the parent UI component
   */
  const handleCancel = () => {
    onParentClose();
  };

  /**
   * Handle the delete button click.
   * @returns void
   */
  const handleDelete = async () => {
    const result = await removeUser(userId);
    if (!result.ok) {
      alert('Something went wrong. Please try again.');
    } else {
      alert('Successfully deleted!');
    }
  };

  /**
   * Handle the checkbox change.
   * @returns void
   */
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete account</DialogTitle>
      </DialogHeader>
      <DialogBody className="pt-6 pb-9">
        <div className="flex flex-col gap-9 text-left">
          <p>Are you sure you want to delete account?</p>
          <div className="flex items-center gap-3 justify-center">
            <Checkbox
              id="delete-account-confirm"
              checked={isChecked}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="delete-account-confirm">Yes, I want to delete my account</Label>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="cancel" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogClose>
        <Button variant="danger" size="sm" onClick={handleDelete} disabled={!isChecked}>
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
