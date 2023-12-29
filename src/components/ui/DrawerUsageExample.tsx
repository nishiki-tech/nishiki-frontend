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
          <DrawerTitle>Delete Container</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
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
            <li>11. Are you sure you want to delete?</li>
            <li>12. Are you sure you want to delete?</li>
            <li>13. Are you sure you want to delete?</li>
            <li>14. Are you sure you want to delete?</li>
            <li>15. Are you sure you want to delete?</li>
            <li>16. Are you sure you want to delete?</li>
            <li>17. Are you sure you want to delete?</li>
            <li>18. Are you sure you want to delete?</li>
            <li>19. Are you sure you want to delete?</li>
            <li>20. Are you sure you want to delete?</li>
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
