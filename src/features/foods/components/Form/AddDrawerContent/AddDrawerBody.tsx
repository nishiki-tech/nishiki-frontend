'use client';

import { LabeledInput } from '@/components/parts';
import {
  DatePicker,
  DrawerBody,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { CategorySelect } from '@/features/foods/components/Form';
import { GroupIdContainersMapType } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';
import { IContainer, IGroup } from '@/types/definition';

import { useState } from 'react';

interface IAddDrawerBodyProps {
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
}

export const AddDrawerBody = ({
  groupIdContainerIdsMap,
  containerIdGroupIdMap,
  containerIdNameMap,
  groupIdNameMap,
}: IAddDrawerBodyProps) => {
  const [selectedGroup, setSelectedGroup] = useState<IGroup['id']>('');
  const [selectedContainer, setSelectedContainer] = useState<IContainer['id']>('');
  const [date, setDate] = useState<Date | undefined>();

  /**
   * Process when a group is selected
   * @param groupId
   */
  const handleSelectGroup = (groupId: IGroup['id']) => {
    setSelectedGroup(groupId);
    setSelectedContainer('');
  };

  /**
   * Process when a container is selected
   * @param containerId
   */
  const handleSelectContainer = (containerId: IContainer['id']) => {
    setSelectedContainer(containerId);
    setSelectedGroup(containerIdGroupIdMap[containerId]);
  };

  return (
    <DrawerBody className="flex flex-col gap-4">
      <LabeledInput label="Name" htmlFor="name" required>
        <Input name="name" id="name" placeholder="Container name" />
      </LabeledInput>
      <LabeledInput label="Group" htmlFor="group" required>
        <Select
          name="group"
          value={selectedGroup}
          onValueChange={(value: string) => handleSelectGroup(value)}
        >
          <SelectTrigger id="group">
            <SelectValue placeholder="Select a group" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(groupIdContainerIdsMap).map((group) => (
              <SelectItem key={group} value={group}>
                {groupIdNameMap[group]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </LabeledInput>
      <LabeledInput label="Container" htmlFor="container" required>
        <Select
          name="container"
          value={selectedContainer}
          onValueChange={(value) => handleSelectContainer(value)}
        >
          <SelectTrigger id="container">
            <SelectValue placeholder="Select a container" />
          </SelectTrigger>
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
      </LabeledInput>
      <div className="grid grid-cols-2 gap-6">
        <LabeledInput label="Quantity" htmlFor="quantity">
          <Input name="quantity" id="quantity" type="number" />
        </LabeledInput>
        <LabeledInput label="Unit" htmlFor="unit">
          <Input name="unit" id="unit" type="text" />
        </LabeledInput>
      </div>
      <LabeledInput label="Expiry" htmlFor="expiry">
        <Input type="hidden" name="expiry" value={String(date)} />
        <DatePicker id="expiry" date={date} onSelect={setDate} />
      </LabeledInput>
      <LabeledInput label="Category" htmlFor="category">
        <CategorySelect
          id="category"
          hiddenInput={(category) => <Input type="hidden" name="category" value={category} />}
        />
      </LabeledInput>
      {/* "Add more" checkbox will be added here */}
    </DrawerBody>
  );
};
