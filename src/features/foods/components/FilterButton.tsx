'use client';

import { FilterIcon } from '@/assets/images/icons';
import { LabeledInput } from '@/components/parts';
import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  SearchInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';
import { GroupIdContainersMapType } from '@/features/foods/types/FoodTypes';
import {
  ContainerIdGroupIdMapType,
  ContainerIdNameMapType,
  GroupIdNameMapType,
} from '@/features/foods/utils/containerMapping';

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { CategoryBadge } from '.';
import { FoodFilterCategoryDrawer } from './FoodFilterCategoryDrawer';

interface IFilterButtonProps {
  isFilterSet: boolean;
  groupIdContainerIdsMap: GroupIdContainersMapType;
  containerIdGroupIdMap: ContainerIdGroupIdMapType;
  containerIdNameMap: ContainerIdNameMapType;
  groupIdNameMap: GroupIdNameMapType;
}

export const FilterButton = ({
  isFilterSet,
  groupIdContainerIdsMap,
  containerIdGroupIdMap,
  containerIdNameMap,
  groupIdNameMap,
}: IFilterButtonProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedContainer, setSelectedContainer] = useState('');
  const [query, setQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<{ [key: string]: boolean }>({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setSelectedGroup(searchParams?.get('group') || '');
    setSelectedContainer(searchParams?.get('container') || '');
    setQuery(searchParams?.get('query') || '');
    const initialCategory: { [key: string]: boolean } = {};
    (searchParams?.get('category') || '').split(',').forEach((item) => {
      if (!item) return;
      initialCategory[item] = true;
    });
    setSelectedCategories(initialCategory);
  }, [searchParams]);

  /**
   * Apply filter function when "Apply" button is pushed
   */
  const handleFilter = () => {
    const params = new URLSearchParams(searchParams);

    // helper method for update params
    const updateSearchParams = (paramName: string, value: string) => {
      if (value && value.length > 0) {
        params.set(paramName, value);
      } else {
        params.delete(paramName);
      }
    };

    // Update Each parameters
    updateSearchParams('group', selectedGroup);
    updateSearchParams('container', selectedContainer);

    const concatedSelectedCategories = Object.entries(selectedCategories)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(',');

    updateSearchParams('category', concatedSelectedCategories);
    updateSearchParams('query', query);

    replace(`${pathname}?${params.toString()}` as Route);
  };

  /**
   * Process when filter "Clear" button is pushed
   */
  const handleClear = () => {
    setSelectedGroup('');
    setSelectedContainer('');
    setSelectedCategories({});
    setQuery('');
  };

  /**
   * Update the status of whether or not each category is selected for category filtering
   * @param key category name
   */
  const toggleCategory = (key: string) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  /**
   * Process when a group is selected
   * @param event
   */
  const handleSelectGroup = (value: string) => {
    setSelectedGroup(value);
    setSelectedContainer('');
  };

  /**
   * Process when a container is selected
   * @param event
   */
  const handleSelectContainer = (containerId: string) => {
    setSelectedContainer(containerId);
    setSelectedGroup(containerIdGroupIdMap[containerId]);
  };

  return (
    <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <button className="flex justify-center items-center absolute top-0 right-0 h-full px-4">
          <div className="relative">
            <FilterIcon className="w-3.5" />
            {isFilterSet && (
              <div className="absolute -top-[3px] -right-[5px] w-2 h-2 rounded-full bg-danger" />
            )}
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent side="bottom">
        <DrawerHeader>
          <DrawerTitle>Filter Food</DrawerTitle>
        </DrawerHeader>
        <DrawerBody className="flex flex-col gap-4">
          <SearchInput
            placeholder="Search Foods..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
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
              onValueChange={(value: string) => handleSelectContainer(value)}
            >
              <SelectTrigger id="container">
                <SelectValue placeholder="Select a container" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(groupIdContainerIdsMap).map(
                  ([groupId, containers]: [string, string[]], i) => {
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
          <div>
            <FoodFilterCategoryDrawer
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
            />
            <div className="flex flex-wrap gap-1.5 whitespace-nowrap">
              {Object.entries(selectedCategories)
                .filter(([, value]) => {
                  return value;
                })
                .map(([key]) => {
                  return (
                    <CategoryBadge
                      key={key}
                      emoji={foodCategories[key]?.emoji}
                      text={foodCategories[key]?.name}
                      onCrossClick={() => toggleCategory(key)}
                    />
                  );
                })}
            </div>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="cancel" size="sm" onClick={() => handleClear()}>
            All clear
          </Button>
          <DrawerClose asChild>
            <Button variant="primary" size="sm" onClick={() => handleFilter()}>
              Apply
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};
