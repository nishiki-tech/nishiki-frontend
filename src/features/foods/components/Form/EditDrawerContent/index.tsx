'use client';

import DeleteIcon from '@/assets/images/icons/icon_delete.svg';
import {
  Button,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Icon,
} from '@/components/ui';
import { GroupIdContainersMapType, IFoodView } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';

import { EditDrawerBody } from './EditDrawerBody';

interface IEditDrawerContentProps {
  food: IFoodView;
  setIsDrawerOpen: (isOpen: boolean) => void;
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
}

export const EditDrawerContent = ({
  food,
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
      <EditDrawerBody
        initialFoodData={food}
        groupIdContainerIdsMap={groupIdContainerIdsMap}
        containerIdGroupIdMap={containerIdGroupIdMap}
        containerIdNameMap={containerIdNameMap}
        groupIdNameMap={groupIdNameMap}
      />
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
