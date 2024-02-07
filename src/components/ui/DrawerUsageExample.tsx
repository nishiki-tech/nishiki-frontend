/**
 * This file is used as an example for the Drawer component.
 * Once you're done with the example, you can delete this file.
 */
'use client';

import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui';

import { useState } from 'react';

export const DrawerUsageExample = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDelete = () => {
    alert('Deleted!');
    setIsDrawerOpen(false);
  };

  return (
    <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button variant="primary" size="md">
          Open
        </Button>
      </DrawerTrigger>
      <DrawerContent side="bottom">
        <DrawerHeader>
          <DrawerTitle>Example Drawer</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <ol>
            {Array(50)
              .fill(0)
              .map((_, index) => (
                <li key={index}>{index + 1}. Are you sure you want to delete?</li>
              ))}
          </ol>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="cancel" size="sm">
              Cancel
            </Button>
          </DrawerClose>
          <Button variant="error" size="sm" onClick={handleDelete}>
            Delete
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};
