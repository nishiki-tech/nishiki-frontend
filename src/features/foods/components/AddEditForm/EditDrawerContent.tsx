'use client';

import DeleteIcon from '@/assets/images/icons/icon_delete.svg';
import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Icon,
} from '@/components/ui';
import { GroupIdContainersMapType } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';

import { AddDrawerBody } from '.';

interface IEditDrawerContentProps {
  setIsDrawerOpen: (isOpen: boolean) => void;
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
}

export const EditDrawerContent = ({
  setIsDrawerOpen,
  groupIdContainerIdsMap,
  containerIdGroupIdMap,
  containerIdNameMap,
  groupIdNameMap,
}: IEditDrawerContentProps) => {
  const handleDeleteClick = () => {
    alert('Successfully deleted!');
    setIsDrawerOpen(false);
  };

  const handleUpdateClick = () => {
    alert('Successfully updated!');
    setIsDrawerOpen(false);
  };

  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Edit Food</DrawerTitle>
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
          <Button variant="cancel" size="sm" onClick={handleDeleteClick}>
            <Icon icon={DeleteIcon} color="danger" size={4.5} />
            Delete
          </Button>
        </DrawerClose>
        <Button variant="primary" size="sm" onClick={handleUpdateClick}>
          Update
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};
