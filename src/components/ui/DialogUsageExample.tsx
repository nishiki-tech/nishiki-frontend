/**
 * This file is used as an example for the Dialog component.
 * Once you're done with the example, you can delete this file.
 */
'use client';

import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';

import { useState } from 'react';

export const DialogUsageExample = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = () => {
    alert('Deleted!');
    setIsDialogOpen(false);
  };

  return (
    <>
      <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Container</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <p>Are you sure you want to delete containers?</p>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="cancel" size="sm">
                Cancel
              </Button>
            </DialogClose>
            <Button variant="error" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </>
  );
};
