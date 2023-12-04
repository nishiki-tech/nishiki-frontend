'use client';

import { Button, Icon } from '@/components/ui';

import React from 'react';

export const MobileHeader = () => {
  return (
    <header className="bg-popover sticky top-0 z-40 w-full">
      <div className="flex h-16 items-center justify-between px-5">
        <Button variant="ghost" size="icon" onClick={() => {}} className="hover:bg-popover">
          <Icon iconName="arrowLeft" color="popover-foreground" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => {}} className="hover:bg-popover">
          <Icon iconName="menuCircle" color="popover-foreground" />
        </Button>
      </div>
    </header>
  );
};
