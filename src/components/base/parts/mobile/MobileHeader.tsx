'use client';
import { MeatballButton } from '@/components/ui';

import React from 'react';

const MobileHeader = () => {
  return (
    <header className="bg-white sticky top-0 z-40 w-full">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-end">
          <MeatballButton onClick={() => alert('open menu')} />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
