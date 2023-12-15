/**
 * This file is used as an example for the Drawer component.
 * Once you're done with the example, you can delete this file.
 */
'use client';

import { DeleteIcon, PenIcon } from '@/assets/images/icons';
import {
  Button,
  Icon,
  Label,
  SelectionDrawerButton,
  SelectionDrawerButtonIcon,
  SelectionDrawerButtonText,
  SelectionDrawerContent,
  SelectionDrawerRadioGroup,
  SelectionDrawerRadioGroupItem,
  SelectionDrawerRoot,
  SelectionDrawerTrigger,
} from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import { useState } from 'react';

const radioOptions = [
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

export const SelectionDrawerWithRadioGroup = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(radioOptions[0].id);

  const onValueChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <>
      <SelectionDrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SelectionDrawerTrigger asChild>
          <Button>SelectionDrawerRadios</Button>
        </SelectionDrawerTrigger>
        <SelectionDrawerContent>
          <SelectionDrawerRadioGroup defaultValue={selectedOption} onValueChange={onValueChange}>
            {radioOptions.map((option, i) => {
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

export const SelectionDrawerWithButtons = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleRenameClick = () => {
    setIsDrawerOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <SelectionDrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SelectionDrawerTrigger asChild>
          <Button variant="error">SelectionDrawerButtons</Button>
        </SelectionDrawerTrigger>
        <SelectionDrawerContent>
          <SelectionDrawerButton onClick={handleRenameClick}>
            <SelectionDrawerButtonIcon>
              <Icon icon={PenIcon} size={5} color="primary" />
            </SelectionDrawerButtonIcon>
            <SelectionDrawerButtonText>Rename Containers</SelectionDrawerButtonText>
          </SelectionDrawerButton>
          <SelectionDrawerButton
            className={cn('border-t border-gray-light')}
            onClick={handleDeleteClick}
          >
            <SelectionDrawerButtonIcon>
              <Icon icon={DeleteIcon} size={5} color="danger" />
            </SelectionDrawerButtonIcon>
            <SelectionDrawerButtonText>Delete Containers</SelectionDrawerButtonText>
          </SelectionDrawerButton>
        </SelectionDrawerContent>
      </SelectionDrawerRoot>
    </>
  );
};
