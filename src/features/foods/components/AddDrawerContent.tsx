'use client';

import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui';
import { AddDrawerBody } from '@/features/foods/components/AddDrawerBody';
import { GroupIdContainersMapType } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';

interface IAddDrawerContentProps {
  setIsDrawerOpen: (isOpen: boolean) => void;
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
}

export const AddDrawerContent = ({
  setIsDrawerOpen,
  groupIdContainerIdsMap,
  containerIdGroupIdMap,
  containerIdNameMap,
  groupIdNameMap,
}: IAddDrawerContentProps) => {
  const handleCancelClick = () => {
    setIsDrawerOpen(false);
  };

  const handleAddClick = () => {
    alert('Successfully added!');
    setIsDrawerOpen(false);
  };

  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Add Food</DrawerTitle>
      </DrawerHeader>
      <DrawerBody>
        <AddDrawerBody
          groupIdContainerIdsMap={groupIdContainerIdsMap}
          containerIdGroupIdMap={containerIdGroupIdMap}
          containerIdNameMap={containerIdNameMap}
          groupIdNameMap={groupIdNameMap}
        />
      </DrawerBody>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="cancel" size="sm" onClick={handleCancelClick}>
            Cancel
          </Button>
        </DrawerClose>
        <Button variant="primary" size="sm" onClick={handleAddClick}>
          Add food
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};
