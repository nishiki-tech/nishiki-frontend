import { DrawerBody, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui';

import React from 'react';

export const DeleteGroupsDrawerContent = () => {
  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Groups</DrawerTitle>
      </DrawerHeader>
      <DrawerBody>{/* Haven't implemented yet*/}</DrawerBody>
    </DrawerContent>
  );
};
