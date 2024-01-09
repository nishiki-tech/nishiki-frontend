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
import { GroupIdContainersMapType, IFoodView } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';
import { IContainer, IFood, IGroup } from '@/types/definition';

import { useState } from 'react';

import { CategorySelect } from '.';

interface IEditDrawerBodyProps {
  initialFoodData: IFoodView;
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
}

export const EditDrawerBody = ({
  initialFoodData,
  groupIdContainerIdsMap,
  containerIdGroupIdMap,
  containerIdNameMap,
  groupIdNameMap,
}: IEditDrawerBodyProps) => {
  const [name, setName] = useState<IFood['name']>(initialFoodData.name);
  const [selectedGroup, setSelectedGroup] = useState<IGroup['id']>(
    containerIdGroupIdMap[initialFoodData.containerId],
  );
  const [selectedContainer, setSelectedContainer] = useState<IContainer['id']>(
    initialFoodData.containerId,
  );
  const [quantity, setQuantity] = useState<string>(String(initialFoodData.quantity));
  const [unit, setUnit] = useState<IFood['unit']>(initialFoodData.unit || '');
  const [date, setDate] = useState<Date | undefined>(initialFoodData.expiry);

  /**
   * Process when a group is selected
   * @param event
   */
  const handleSelectGroup = (groupId: IGroup['id']) => {
    setSelectedGroup(groupId);
    setSelectedContainer('');
  };

  /**
   * Process when a container is selected
   * @param event
   */
  const handleSelectContainer = (containerId: IContainer['id']) => {
    setSelectedContainer(containerId);
    setSelectedGroup(containerIdGroupIdMap[containerId]);
  };

  return (
    <DrawerBody className="flex flex-col gap-4">
      <LabeledInput label="Name" htmlFor="name" required>
        <Input
          name="name"
          id="name"
          placeholder="Container name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </LabeledInput>
      {/* TODO: Make it a separate component */}
      <LabeledInput label="Group" htmlFor="group" required>
        <Select
          name="group"
          value={selectedGroup}
          onValueChange={(value) => handleSelectGroup(value)}
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
      {/* TODO: Make it a separate component */}
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
          <Input
            name="quantity"
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </LabeledInput>
        <LabeledInput label="Unit" htmlFor="unit">
          <Input
            name="unit"
            id="unit"
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
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
