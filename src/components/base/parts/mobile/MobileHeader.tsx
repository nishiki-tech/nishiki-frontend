// not using "use client" since it's a child of MobileLayout, which is already using "use client"
import { ChevronBackIcon, MeatballIcon } from '@/components/icon';
import { Button } from '@/components/ui';

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
          <ChevronBackIcon />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => {}} className="hover:bg-popover">
          <MeatballIcon />
        </Button>
      </div>
    </header>
  );
};
