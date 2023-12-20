import { TriangleDownIcon } from '@/assets/images/icons';
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

export const sortOptions = [
  {
    id: 'name',
    label: 'Name (A → Z)',
  },
  {
    id: 'expiry',
    label: 'Expiry (Oldest → Newest)',
  },
  {
    id: 'createdAt',
    label: 'Created At (Oldest → Newest)',
  },
];

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export const FoodSort = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(sortOptions[0].id);

  const onValueChange = (value: string) => {
    setSelectedOption(value);
  };

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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
          <div className="flex items-center gap-2">
            Name(A→Z)
            <Icon icon={TriangleDownIcon} className="m-5" />
          </div>
        </SelectionDrawerTrigger>
        <SelectionDrawerContent>
          <SelectionDrawerRadioGroup defaultValue={selectedOption} onValueChange={onValueChange}>
            {sortOptions.map((option, i) => {
              return (
                <Label
                  key={i}
                  htmlFor={option.id}
                  variant="selectionDrawer"
                  className={cn(i !== 0 && 'border-t border-gray-light')}
                >
                  <SelectionDrawerRadioGroupItem
                    value={option.id}
                    id={option.id}
                    className="peer"
                    onClick={() => handleSort(option.id)}
                  />
                  {option.label}
                </Label>
              );
            })}
          </SelectionDrawerRadioGroup>
        </SelectionDrawerContent>
      </SelectionDrawerRoot>
    </>
  );
};
