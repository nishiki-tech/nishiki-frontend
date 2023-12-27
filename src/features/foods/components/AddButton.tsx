'use client';

import { PlusIcon } from '@/assets/images/icons';
import { Button, DrawerContent, DrawerRoot, DrawerTrigger, Icon } from '@/components/ui';
import { AddDrawerContent } from '@/features/foods/components';
import { GroupIdContainersMapType } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';
import { cn } from '@/lib/tailwind/utils';

import { useState } from 'react';

interface IAddButtonProps {
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
  className?: string;
}

export const AddButton = ({
  groupIdContainerIdsMap,
  containerIdGroupIdMap,
  containerIdNameMap,
  groupIdNameMap,
  className,
}: IAddButtonProps) => {
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
      <DrawerContent side="bottom">
        <AddDrawerContent
          setIsDrawerOpen={setIsDrawerOpen}
          groupIdContainerIdsMap={groupIdContainerIdsMap}
          containerIdGroupIdMap={containerIdGroupIdMap}
          containerIdNameMap={containerIdNameMap}
          groupIdNameMap={groupIdNameMap}
        />
      </DrawerContent>
    </DrawerRoot>
  );
};
