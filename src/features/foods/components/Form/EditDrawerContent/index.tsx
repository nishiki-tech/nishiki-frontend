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
import { Form } from '@/components/ui/Form';
import { foodFormSchema, FoodInputs } from '@/features/foods/lib/schema';
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
  food?: IFoodView;
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
  /**
   * Process when the delete button is clicked
   */
  const handleDeleteClick = () => {
    alert('Successfully deleted!');
    setIsDrawerOpen(false);
  };

  const form = useForm<FoodInputs>({
    resolver: zodResolver(foodFormSchema),
  });

  /**
   * 1. Initialize the form values when the drawer gets opened.
   * 2. Clear the form values when the drawer gets closed, since the state variable `food` becomes undefined.
   */
  useEffect(() => {
    form.reset({
      name: food?.name ?? '',
      group: containerIdGroupIdMap[food?.containerId ?? ''] ?? '',
      container: food?.containerId ?? '',
      quantity: String(food?.quantity ?? '') ?? '',
      unit: food?.unit ?? '',
      expiry: food?.expiry,
      category: food?.category ?? 'unselected',
    });
  }, [containerIdGroupIdMap, food, form]);

  /**
   * Process when the form is submitted
   * @param values The form values
   */
  const processSubmit: SubmitHandler<FoodInputs> = (values) => {
    console.log({ values });
    alert('Submitted!');
    form.reset();
    setIsDrawerOpen(false);
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
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="cancel" size="sm" onClick={handleDeleteClick}>
                <Icon icon={DeleteIcon} color="danger" size={4.5} />
                Delete
              </Button>
            </DrawerClose>
            <Button type="submit" variant="primary" size="sm">
              Update
            </Button>
          </DrawerFooter>
        </form>
      </Form>
    </DrawerContent>
  );
};
