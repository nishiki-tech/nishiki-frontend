'use client';

import { MenuMeatballIcon } from '@/assets/images/icons';
import { Button, Icon, SelectionDrawerRoot, SelectionDrawerTrigger } from '@/components/ui';

import { FC, useState } from 'react';

import { GroupCollectionMenuDrawerContent } from './GroupCollectionMenuDrawerContent';

interface IGroupCollectionMenuButtonProps {}

export const GroupCollectionMenuButton: FC<IGroupCollectionMenuButtonProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectionDrawerRoot open={isOpen} onOpenChange={setIsOpen}>
      <SelectionDrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icon icon={MenuMeatballIcon} size={5} />
        </Button>
      </SelectionDrawerTrigger>
      <GroupCollectionMenuDrawerContent />
    </SelectionDrawerRoot>
  );
};
