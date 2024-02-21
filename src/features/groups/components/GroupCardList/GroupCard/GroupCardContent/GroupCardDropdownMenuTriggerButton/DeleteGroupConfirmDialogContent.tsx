import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

import React from 'react';

export const DeleteGroupConfirmDialogContent = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Group</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>Are you sure you want to delete group?</p>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="cancel" size="sm">
            Cancel
          </Button>
        </DialogClose>
        <Button
          variant="error"
          size="sm"
          onClick={() => {
            alert('delete');
          }}
        >
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
