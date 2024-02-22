'use client';

import { DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui';
import { Form } from '@/components/ui/Form';
import { EditDrawerFooter } from '@/features/foods/components/Form/EditDrawerContent/EditDrawerFooter';
import { updateFood } from '@/features/foods/lib/actions';
import { updateFoodFormSchema, UpdateFoodInputs } from '@/features/foods/lib/schema';
import { GroupIdContainersMapType, IFoodView } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { EditDrawerBody } from './EditDrawerBody';

interface IEditDrawerContentProps {
  /**
   * The food to be edited.
   */
  food?: IFoodView;
  /**
   * The function to set the drawer's open state.
   */
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
  const form = useForm<UpdateFoodInputs>({
    resolver: zodResolver(updateFoodFormSchema),
  });

  /**
   * 1. Initialize the form values when the drawer gets opened.
   * 2. Clear the form values when the drawer gets closed, since the state variable `food` becomes undefined.
   */
  useEffect(() => {
    form.reset({
      id: food?.id ?? '',
      name: food?.name ?? '',
      group: containerIdGroupIdMap[food?.containerId ?? ''] ?? '',
      container: food?.containerId ?? '',
      quantity: String(food?.quantity ?? '') ?? '',
      unit: food?.unit ?? '',
      expiry: food?.expiry ?? undefined,
      category: food?.category ?? 'unselected',
    });
  }, [containerIdGroupIdMap, food, form]);

  /**
   * Process when the form is submitted
   * @param values The form values
   */
  const processSubmit: SubmitHandler<UpdateFoodInputs> = async (values: UpdateFoodInputs) => {
    const result = await updateFood(values);
    if (!result.ok) {
      alert('Failed to update');
    } else {
      alert('Successfully updated');
      form.reset();
      setIsDrawerOpen(false);
    }
  };

  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Edit Food</DrawerTitle>
      </DrawerHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processSubmit)}>
          <EditDrawerBody
            form={form}
            groupIdContainerIdsMap={groupIdContainerIdsMap}
            containerIdGroupIdMap={containerIdGroupIdMap}
            containerIdNameMap={containerIdNameMap}
            groupIdNameMap={groupIdNameMap}
          />
          <EditDrawerFooter
            setIsDrawerOpen={setIsDrawerOpen}
            containerId={food?.containerId}
            foodId={food?.id}
          />
        </form>
      </Form>
    </DrawerContent>
  );
};
