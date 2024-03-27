'use client';

import { DrawerContent, DrawerHeader, DrawerTitle, Form } from '@/components/ui';
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
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { EditDrawerBody } from './EditDrawerBody';

interface IEditDrawerContentProps {
  /**
   * The food to be edited.
   */
  food?: IFoodView;
  /**
   * The function to close the drawer.
   */
  onDrawerClose: () => void;
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
}

export const EditDrawerContent = ({
  food,
  onDrawerClose,
  groupIdContainerIdsMap,
  containerIdGroupIdMap,
  containerIdNameMap,
  groupIdNameMap,
}: IEditDrawerContentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
    if (isLoading) return;
    setIsLoading(true);
    const result = await updateFood(values);
    if (!result.ok) {
      alert('Something went wrong. Please try again.');
      setIsLoading(false);
    } else {
      alert('Successfully updated');
      onDrawerClose();
      setIsLoading(false);
      router.refresh();
    }
  };

  /**
   * Event handler called when focus moves to the trigger after closing.
   * {@link https://www.radix-ui.com/primitives/docs/components/dialog#content}
   * @param e The event
   */
  const handleCloseAutoFocus = (e: Event) => {
    // Prevent the focus from moving to the last food card of the list when the drawer is closed.
    e.preventDefault();
  };

  return (
    <DrawerContent
      side="bottom"
      onCloseAutoFocus={(e) => {
        handleCloseAutoFocus(e);
      }}
    >
      <DrawerHeader>
        <DrawerTitle>Edit Food</DrawerTitle>
      </DrawerHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processSubmit)} className="overflow-y-auto">
          <EditDrawerBody
            form={form}
            groupIdContainerIdsMap={groupIdContainerIdsMap}
            containerIdGroupIdMap={containerIdGroupIdMap}
            containerIdNameMap={containerIdNameMap}
            groupIdNameMap={groupIdNameMap}
          />
          <EditDrawerFooter
            onDrawerClose={onDrawerClose}
            containerId={food?.containerId}
            foodId={food?.id}
            isLoading={isLoading}
          />
        </form>
      </Form>
    </DrawerContent>
  );
};
