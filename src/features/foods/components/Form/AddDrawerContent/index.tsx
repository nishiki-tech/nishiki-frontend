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

import { FormEvent } from 'react';

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
  // const handleAddClick = () => {
  //   alert('Successfully added!');
  //   setIsDrawerOpen(false);
  // };

  /**
   * Process when the form is submitted
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);

    const data = await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(formDataObject),
    }).then((res) => res.json());

    console.log(data);
  };

  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Add Food</DrawerTitle>
      </DrawerHeader>
      <form onSubmit={handleSubmit}>
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
          <Button type="submit" variant="primary" size="sm">
            Add food
          </Button>
        </DrawerFooter>
      </form>
    </DrawerContent>
  );
};
