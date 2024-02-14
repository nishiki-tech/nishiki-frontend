'use client';

import {
  Button,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui';
import { Form } from '@/components/ui/Form';
import { createFood } from '@/features/foods/lib/actions';
import { defaultValues, foodFormSchema, FoodInputs } from '@/features/foods/lib/schema';
import { GroupIdContainersMapType } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { AddDrawerBody } from './AddDrawerBody';

interface IAddDrawerContentProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
}

export const AddDrawerContent = ({
  isDrawerOpen,
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

  const form = useForm<FoodInputs>({
    resolver: zodResolver(foodFormSchema),
    defaultValues,
  });

  /**
   * Reset the form when the drawer is closed.
   */
  useEffect(() => {
    if (!isDrawerOpen) {
      form.reset();
    }
  }, [isDrawerOpen, form]);

  /**
   * Process when the form is submitted
   * @param values The form values
   */
  const processSubmit: SubmitHandler<FoodInputs> = async (values: FoodInputs) => {
    const result = await createFood(values);
    if (!result.ok) {
      alert('Failed to create food');
    } else {
      alert('Food successfully created');
      form.reset();
      setIsDrawerOpen(false);
    }
  };

  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Add Food</DrawerTitle>
      </DrawerHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processSubmit)}>
          <AddDrawerBody
            form={form}
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
      </Form>
    </DrawerContent>
  );
};
