/**
 * This file is used as an example for the ExampleDrawer component.
 * Once you're done with the example, you can delete this file.
 */
'use client';

import { IconCross } from '@/assets/images/icons';
import { Button, Icon } from '@/components/ui';

import { useState } from 'react';

import {
  ExampleDrawerBody,
  ExampleDrawerClose,
  ExampleDrawerContent,
  ExampleDrawerFooter,
  ExampleDrawerHeader,
  ExampleDrawerRoot,
  ExampleDrawerTitle,
  ExampleDrawerTrigger,
} from '.';

export const ExampleDrawerUsageExample = () => {
  const [isExampleDrawerOpen, setIsExampleDrawerOpen] = useState(false);

  const handleDelete = () => {
    alert('Deleted!');
    setIsExampleDrawerOpen(false);
  };

  return (
    <ExampleDrawerRoot open={isExampleDrawerOpen} onOpenChange={setIsExampleDrawerOpen}>
      <ExampleDrawerTrigger asChild>
        <Button variant="primary" size="md">
          Open
        </Button>
      </ExampleDrawerTrigger>
      <ExampleDrawerContent>
        <ExampleDrawerHeader className="flex justify-between">
          <ExampleDrawerTitle>Delete Container</ExampleDrawerTitle>
          <ExampleDrawerClose>
            <Icon icon={IconCross} color="gray-dark" size={3.5} />
          </ExampleDrawerClose>
        </ExampleDrawerHeader>
        <ExampleDrawerBody>
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
        </ExampleDrawerBody>
        <ExampleDrawerFooter>
          <Button variant="danger" size="md" onClick={handleDelete}>
            Delete
          </Button>
        </ExampleDrawerFooter>
      </ExampleDrawerContent>
    </ExampleDrawerRoot>
  );
};
