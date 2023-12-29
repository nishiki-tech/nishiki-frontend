import { DeleteIcon } from '@/assets/images/icons';
import {
  DrawerRoot,
  DrawerTrigger,
  Icon,
  SelectionDrawerButton,
  SelectionDrawerButtonIcon,
  SelectionDrawerButtonText,
} from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import React, { FC, useState } from 'react';

import { DeleteGroupsDrawerContent } from './DeleteGroupsDrawerContent';

interface IDeleteGroupsButtonProps {}

export const DeleteGroupsButton: FC<IDeleteGroupsButtonProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DrawerRoot open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <SelectionDrawerButton className={cn('border-t border-gray-light')}>
          <SelectionDrawerButtonIcon>
            <Icon icon={DeleteIcon} size={5} color="danger" />
          </SelectionDrawerButtonIcon>
          <SelectionDrawerButtonText>Delete groups</SelectionDrawerButtonText>
        </SelectionDrawerButton>
      </DrawerTrigger>
      <DeleteGroupsDrawerContent />
    </DrawerRoot>
  );
};
