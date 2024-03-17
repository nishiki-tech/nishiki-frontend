'use client';

import {
  Button,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Form,
} from '@/components/ui';
import { createFood } from '@/features/foods/lib/actions';
import {
  createFoodDefaultValues,
  createFoodFormSchema,
  CreateFoodInputs,
} from '@/features/foods/lib/schema';
import { GroupIdContainersMapType } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);
  /**
   * Process when the cancel button is clicked
   */
  const handleCancelClick = () => {
    setIsDrawerOpen(false);
  };

  const form = useForm<CreateFoodInputs>({
    resolver: zodResolver(createFoodFormSchema),
    defaultValues: createFoodDefaultValues,
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
  const processSubmit: SubmitHandler<CreateFoodInputs> = async (values: CreateFoodInputs) => {
    if (isLoading) return;
    setIsLoading(true);
    const result = await createFood(values);
    if (!result.ok) {
      alert('Something went wrong. Please try again.');
    } else {
      alert('Successfully created');
      form.reset();
      setIsDrawerOpen(false);
    }
    setIsLoading(false);
  };

  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Add Food</DrawerTitle>
      </DrawerHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processSubmit)} className="overflow-y-auto">
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
            <Button type="submit" variant="primary" size="sm" disabled={isLoading}>
              Add food
            </Button>
          </DrawerFooter>
        </form>
      </Form>
    </DrawerContent>
  );
};
