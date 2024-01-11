/**
 * This file is used as an example for the SecondaryDrawer component.
 * Once you're done with the example, you can delete this file.
 */
'use client';

import {
  Button,
  SecondaryDrawerBody,
  SecondaryDrawerContent,
  SecondaryDrawerFooter,
  SecondaryDrawerHeader,
  SecondaryDrawerRoot,
  SecondaryDrawerTitle,
  SecondaryDrawerTrigger,
} from '@/components/ui';

import { useState } from 'react';

export const SecondaryDrawerUsageExample = () => {
  const [isSecondaryDrawerOpen, setIsSecondaryDrawerOpen] = useState(false);

  const handleDelete = () => {
    alert('Deleted!');
    setIsSecondaryDrawerOpen(false);
  };

  return (
    <SecondaryDrawerRoot open={isSecondaryDrawerOpen} onOpenChange={setIsSecondaryDrawerOpen}>
      <SecondaryDrawerTrigger asChild>
        <Button variant="primary" size="md">
          Open
        </Button>
      </SecondaryDrawerTrigger>
      <SecondaryDrawerContent side="bottom">
        <SecondaryDrawerHeader>
          <SecondaryDrawerTitle>Delete Container</SecondaryDrawerTitle>
        </SecondaryDrawerHeader>
        <SecondaryDrawerBody>
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
        </SecondaryDrawerBody>
        <SecondaryDrawerFooter>
          <Button variant="error" size="md" onClick={handleDelete}>
            Delete
          </Button>
        </SecondaryDrawerFooter>
      </SecondaryDrawerContent>
    </SecondaryDrawerRoot>
  );
};
