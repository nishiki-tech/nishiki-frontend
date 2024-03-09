'use client';

import {
  DatePicker,
  DrawerBody,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  NumberInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { CategorySelect } from '@/features/foods/components/Form';
import { createFoodFormSchema } from '@/features/foods/lib/schema';
import { GroupIdContainersMapType } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';
import { IContainer, IGroup } from '@/types/definition';

import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

interface IAddDrawerBodyProps {
  form: UseFormReturn<z.infer<typeof createFoodFormSchema>>;
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
}

export const AddDrawerBody = ({
  form,
  groupIdContainerIdsMap,
  containerIdGroupIdMap,
  containerIdNameMap,
  groupIdNameMap,
}: IAddDrawerBodyProps) => {
  /**
   * Process when a group is selected.
   * @param groupId selected group
   */
  const handleGroupChange = (groupId: IGroup['id']) => {
    form.setValue('group', groupId);
    form.setValue('container', '');
  };

  /**
   * Process when a container is selected.
   * @param containerId selected container
   */
  const handleContainerChange = (containerId: IContainer['id']) => {
    form.setValue('container', containerId);
    form.setValue('group', containerIdGroupIdMap[containerId]);
  };

  return (
    <DrawerBody className="flex flex-col gap-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel required>Name</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Food name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="group"
        render={({ field }) => (
          <FormItem>
            <FormLabel required>Group</FormLabel>
            <Select onValueChange={handleGroupChange} value={field.value}>
              <FormControl>
                <SelectTrigger variant="rounded">
                  <SelectValue placeholder="Select a group" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Object.keys(groupIdContainerIdsMap).map((group) => (
                  <SelectItem key={group} value={group}>
                    {groupIdNameMap[group]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="container"
        render={({ field }) => (
          <FormItem>
            <FormLabel required>Container</FormLabel>
            <Select onValueChange={handleContainerChange} value={field.value}>
              <FormControl>
                <SelectTrigger variant="rounded">
                  <SelectValue placeholder="Select a container" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Object.entries(groupIdContainerIdsMap).map(
                  ([groupId, containers]: [IGroup['id'], IContainer['id'][]], i) => {
                    return (
                      <SelectGroup key={i}>
                        <SelectLabel>{groupIdNameMap[groupId]}</SelectLabel>
                        {containers.map((container) => (
                          <SelectItem key={container} value={container}>
                            {containerIdNameMap[container]}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    );
                  },
                )}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="grid grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <NumberInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="expiry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Expiry</FormLabel>
            <Input type="hidden" name="expiry" value={String(field.value)} />
            <FormControl>
              <DatePicker id="expiry" date={field.value} onSelect={field.onChange} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>
            <FormControl>
              <CategorySelect
                id="category"
                selectedCategory={field.value}
                setSelectedCategory={field.onChange}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* "Add more" checkbox will be added here */}
    </DrawerBody>
  );
};
