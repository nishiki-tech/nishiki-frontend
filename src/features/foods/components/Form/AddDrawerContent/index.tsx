'use client';

import {
  Button,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui';
import { GroupIdContainersMapType } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';

import { AddDrawerBody } from './AddDrawerBody';

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
  /**
   * Process when the cancel button is clicked
   */
  const handleCancelClick = () => {
    setIsDrawerOpen(false);
  };

  /**
   * Process when the add button is clicked
   */
  const handleAddClick = () => {
    alert('Successfully added!');
    setIsDrawerOpen(false);
  };

  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Add Food</DrawerTitle>
      </DrawerHeader>
      <AddDrawerBody
        groupIdContainerIdsMap={groupIdContainerIdsMap}
        containerIdGroupIdMap={containerIdGroupIdMap}
        containerIdNameMap={containerIdNameMap}
        groupIdNameMap={groupIdNameMap}
      />
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
