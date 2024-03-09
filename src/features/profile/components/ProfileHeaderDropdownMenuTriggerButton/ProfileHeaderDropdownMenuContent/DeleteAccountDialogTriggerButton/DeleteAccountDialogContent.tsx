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

import { useState } from 'react';

interface IDeleteAccountDialogContentProps {
  /**
   * The function to close the parent UI component.
   */
  onParentClose?: () => void;
  /**
   * The function to close this delete account dialog.
   */
  onDialogClose: () => void;
}

export const DeleteAccountDialogContent = ({
  onParentClose,
  onDialogClose,
}: IDeleteAccountDialogContentProps) => {
  const [isChecked, setIsChecked] = useState(false);
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
        <Button variant="error" size="sm" onClick={handleDelete} disabled={!isChecked}>
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
