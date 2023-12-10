/**
 * This file is used as an example for the Dialog component.
 * Once you're done with the example, you can delete this file.
 */
'use client';

import { Button, Dialog } from '@/components/ui';

import { useState } from 'react';

export const DialogUsageExample = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = () => {
    alert('Deleted!');
    setIsDialogOpen(false);
  };

  return (
    <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Dialog.Trigger asChild>
        <Button>Open</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Delete Container</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <p>Are you sure you want to delete containers?</p>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="cancel" size="sm">
              Cancel
            </Button>
          </Dialog.Close>
          <Button variant="error" size="sm" onClick={handleDelete}>
            Delete
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
};
