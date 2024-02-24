import { CaretDownIcon } from '@/assets/images/icons';
import {
  Icon,
  Label,
  SelectionDrawerContent,
  SelectionDrawerRadioGroup,
  SelectionDrawerRadioGroupItem,
  SelectionDrawerRoot,
  SelectionDrawerTrigger,
} from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import { useState } from 'react';

export const sortOptions = {
  createdAt: 'Created At (Newest → Oldest)',
  name: 'Name (A → Z)',
  expiry: 'Expiry (Oldest → Newest)',
};

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export const FoodSort = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('createdAt');
  const onValueChange = (value: string) => {
    setSelectedOption(value);
  };

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  /**
   * Switch sort mode
   * @param term - sort mode name
   */
  const handleSort = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('sort', term);
    } else {
      params.delete('sort');
    }
    replace(`${pathname}?${params.toString()}` as Route);
  };

  return (
    <>
      <SelectionDrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SelectionDrawerTrigger asChild>
          <button className="flex items-center">
            {sortOptions[selectedOption as keyof typeof sortOptions]}
            <Icon icon={CaretDownIcon} className="m-5" size={2.5} color="gray-dark" />
          </button>
        </SelectionDrawerTrigger>
        <SelectionDrawerContent>
          <SelectionDrawerRadioGroup defaultValue={selectedOption} onValueChange={onValueChange}>
            {Object.keys(sortOptions).map((option, i) => {
              return (
                <Label
                  key={i}
                  htmlFor={option}
                  variant="selectionDrawer"
                  className={cn(i !== 0 && 'border-t border-gray-light')}
                >
                  <SelectionDrawerRadioGroupItem
                    value={option}
                    id={option}
                    onClick={() => handleSort(option)}
                  />
                  {sortOptions[option as keyof typeof sortOptions]}
                </Label>
              );
            })}
          </SelectionDrawerRadioGroup>
        </SelectionDrawerContent>
      </SelectionDrawerRoot>
    </>
  );
};
