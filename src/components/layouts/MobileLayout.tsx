import { BottomTabs, MobileHeader } from '@/components/parts';

import { FC, ReactNode } from 'react';

interface IMobileLayoutProps {
  children: ReactNode;
}

export const MobileLayout: FC<IMobileLayoutProps> = ({ children }) => {
  return (
    // The top and bottom padding is intended to make space for the header and bottom tabs.
    <div className="relative pt-12 pb-16 flex min-h-screen flex-col">
      <MobileHeader />
      {children}
      <BottomTabs />
    </div>
  );
};
