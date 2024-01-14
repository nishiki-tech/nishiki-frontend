/**
 * This file is used as an example for the PrimaryDrawer component.
 * Once you're done with the example, you can delete this file.
 */
'use client';

import { CrossIcon } from '@/assets/images/icons';
import {
  Button,
  Icon,
  PrimaryDrawerBody,
  PrimaryDrawerClose,
  PrimaryDrawerContent,
  PrimaryDrawerFooter,
  PrimaryDrawerHeader,
  PrimaryDrawerRoot,
  PrimaryDrawerTitle,
  PrimaryDrawerTrigger,
} from '@/components/ui';

import { useState } from 'react';

export const PrimaryDrawerUsageExample = () => {
  const [isPrimaryDrawerOpen, setIsPrimaryDrawerOpen] = useState(false);

  const handleDelete = () => {
    alert('Deleted!');
    setIsPrimaryDrawerOpen(false);
  };

  return (
    <PrimaryDrawerRoot open={isPrimaryDrawerOpen} onOpenChange={setIsPrimaryDrawerOpen}>
      <PrimaryDrawerTrigger asChild>
        <Button variant="primary" size="md">
          Open
        </Button>
      </PrimaryDrawerTrigger>
      <PrimaryDrawerContent>
        <PrimaryDrawerHeader className="flex justify-between">
          <PrimaryDrawerTitle>Delete Container</PrimaryDrawerTitle>
          <PrimaryDrawerClose>
            <Icon icon={CrossIcon} color="gray-dark" size={3.5} />
          </PrimaryDrawerClose>
        </PrimaryDrawerHeader>
        <PrimaryDrawerBody>
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
        </PrimaryDrawerBody>
        <PrimaryDrawerFooter>
          <Button variant="error" size="md" onClick={handleDelete}>
            Delete
          </Button>
        </PrimaryDrawerFooter>
      </PrimaryDrawerContent>
    </PrimaryDrawerRoot>
  );
};
