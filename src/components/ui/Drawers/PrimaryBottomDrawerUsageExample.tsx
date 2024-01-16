/**
 * This file is used as an example for the PrimaryBottomDrawer component.
 * Once you're done with the example, you can delete this file.
 */
'use client';

import { CrossIcon } from '@/assets/images/icons';
import {
  Button,
  Icon,
  PrimaryBottomDrawerBody,
  PrimaryBottomDrawerClose,
  PrimaryBottomDrawerContent,
  PrimaryBottomDrawerFooter,
  PrimaryBottomDrawerHeader,
  PrimaryBottomDrawerRoot,
  PrimaryBottomDrawerTitle,
  PrimaryBottomDrawerTrigger,
} from '@/components/ui';

import { useState } from 'react';

export const PrimaryBottomDrawerUsageExample = () => {
  const [isPrimaryBottomDrawerOpen, setIsPrimaryBottomDrawerOpen] = useState(false);

  const handleDelete = () => {
    alert('Deleted!');
    setIsPrimaryBottomDrawerOpen(false);
  };

  return (
    <PrimaryBottomDrawerRoot
      open={isPrimaryBottomDrawerOpen}
      onOpenChange={setIsPrimaryBottomDrawerOpen}
    >
      <PrimaryBottomDrawerTrigger asChild>
        <Button variant="primary" size="md">
          Open
        </Button>
      </PrimaryBottomDrawerTrigger>
      <PrimaryBottomDrawerContent>
        <PrimaryBottomDrawerHeader className="flex justify-between">
          <PrimaryBottomDrawerTitle>Delete Container</PrimaryBottomDrawerTitle>
          <PrimaryBottomDrawerClose>
            <Icon icon={CrossIcon} color="gray-dark" size={3.5} />
          </PrimaryBottomDrawerClose>
        </PrimaryBottomDrawerHeader>
        <PrimaryBottomDrawerBody>
          <ol>
            <li>1. Are you sure you want to delete?</li>
            <li>2. Are you sure you want to delete?</li>
            <li>3. Are you sure you want to delete?</li>
            <li>4. Are you sure you want to delete?</li>
            <li>5. Are you sure you want to delete?</li>
            <li>6. Are you sure you want to delete?</li>
            <li>7. Are you sure you want to delete?</li>
            <li>8. Are you sure you want to delete?</li>
            <li>9. Are you sure you want to delete?</li>
            <li>10. Are you sure you want to delete?</li>
          </ol>
        </PrimaryBottomDrawerBody>
        <PrimaryBottomDrawerFooter>
          <Button variant="error" size="md" onClick={handleDelete}>
            Delete
          </Button>
        </PrimaryBottomDrawerFooter>
      </PrimaryBottomDrawerContent>
    </PrimaryBottomDrawerRoot>
  );
};
