// not using "use client" since it's a child of MobileLayout, which is already using "use client"

import { Button, Icon } from '@/components/ui';

import { useRouter } from 'next/navigation';
import React from 'react';

export const MobileHeader = () => {
  const router = useRouter();

  return (
    <header className="bg-popover sticky top-0 z-40 w-full">
      <div className="flex h-16 items-center justify-between px-5">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="hover:bg-popover"
        >
          <Icon iconName="arrowLeft" fill="popover-foreground" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => {}} className="hover:bg-popover">
          <Icon iconName="menuCircle" fill="popover-foreground" />
        </Button>
      </div>
    </header>
  );
};
