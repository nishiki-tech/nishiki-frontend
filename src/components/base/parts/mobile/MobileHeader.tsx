// not using "use client" since it's a child of MobileLayout, which is already using "use client"
import { BackArrowIconButton, MeatballIconButton } from '@/components/ui';

import { useRouter } from 'next/navigation';
import React from 'react';

const MobileHeader = () => {
  const router = useRouter();

  return (
    <header className="bg-popover sticky top-0 z-40 w-full">
      <div className="flex h-16 items-center justify-between px-5">
        {/* Q : Backward button can stay here always? or Disappear, but in which condition? */}
        <BackArrowIconButton className="w-8 h-8" onClick={() => router.back()} />
        {/* Q : Will display page's name or title, but the title hasn't been decided */}
        <MeatballIconButton className="w-8 h-8" onClick={() => alert('open menu')} />
      </div>
    </header>
  );
};

export default MobileHeader;
