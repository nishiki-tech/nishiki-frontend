'use client';

import { PlusIcon } from '@/assets/images/icons';
import { Button, DrawerRoot, DrawerTrigger, Icon } from '@/components/ui';
import { AddDrawer } from '@/features/foods/components';
import { cn } from '@/lib/tailwind/utils';

import { useState } from 'react';

interface IAddButtonProps {
  className?: string;
}

export const AddButton = ({ className }: IAddButtonProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button
          className={cn(
            'w-14 aspect-square rounded-full',
            'flex items-center justify-center',
            'bg-accent hover:bg-accent-dark shadow-[0_5px_8px_rgba(0,0,0,0.3)]',
            className,
          )}
        >
          <Icon icon={PlusIcon} size={4.5} color="black" />
        </Button>
      </DrawerTrigger>
      <AddDrawer setIsDrawerOpen={setIsDrawerOpen} />
    </DrawerRoot>
  );
};
