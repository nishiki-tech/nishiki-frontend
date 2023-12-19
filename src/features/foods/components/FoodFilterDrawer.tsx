'use client';

import { FilterIcon } from '@/assets/images/icons';
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
  Icon,
} from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';
import { SearchBar } from '@/features/foods/components/SearchBar';

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

import { CategoryBadge } from '.';
import { FoodFilterCategoryDrawer } from './FoodFilterCategoryDrawer';

export const FoodFilterDrawer = ({ containers }: { containers: Record<string, string[]> }) => {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedContainer, setSelectedContainer] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<{ [key: string]: boolean }>({});

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = () => {
    const params = new URLSearchParams(searchParams);
    // group
    if (selectedGroup && selectedGroup.length > 0) {
      params.set('group', selectedGroup);
    } else {
      params.delete('group');
    }
    replace(`${pathname}?${params.toString()}` as Route);
    // container
    if (selectedContainer && selectedContainer.length > 0) {
      params.set('container', selectedContainer);
    } else {
      params.delete('container');
    }
    replace(`${pathname}?${params.toString()}` as Route);
    const concatedSelectedCategories = Object.entries(selectedCategories)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(',');

    if (concatedSelectedCategories && concatedSelectedCategories.length > 0) {
      params.set('category', concatedSelectedCategories);
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}` as Route);
  };

  const handleClear = () => {
    setSelectedGroup('');
    setSelectedContainer('');
    setSelectedCategories({});
    console.log('selectedCategories', selectedCategories);
  };

  const toggleCategory = (key: string) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectGroup = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(event.target.value);
  };
  const handleSelectContainer = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedContainer(event.target.value);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SearchBar />
      <DrawerTrigger asChild>
        <Button>
          <Icon icon={FilterIcon} color="black" size={4} />
        </Button>
      </DrawerTrigger>
      <DrawerContent side="bottom">
        <DrawerHeader>
          <DrawerTitle>Filter Food</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <SearchBar />
          <div>
            Filter
            <label>Group :</label>
            <select name="groups" onChange={(event) => handleSelectGroup(event)} id="groups">
              <option key="any" value="">
                Select a Group
              </option>
              {Object.keys(containers).map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
            <label>container :</label>
            <select
              name="containers"
              onChange={(event) => handleSelectContainer(event)}
              id="containers"
            >
              <option key="any" value="">
                Select a Container
              </option>
              {Object.entries(containers).map(([group, containers]) => (
                <React.Fragment key={group}>
                  {group}
                  {containers.map((container) => (
                    <option key={container} value={container}>
                      {container}
                    </option>
                  ))}
                </React.Fragment>
              ))}
            </select>
            <FoodFilterCategoryDrawer
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
            />
            <div className="flex flex-wrap gap-1 mb-1">
              {Object.entries(selectedCategories)
                .filter(([, value]) => {
                  return value;
                })
                .map(([key]) => {
                  return (
                    <CategoryBadge
                      key={key}
                      emoji={foodCategories[key].emoji}
                      text={foodCategories[key].name}
                      onCrossClick={() => toggleCategory(key)}
                    ></CategoryBadge>
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
