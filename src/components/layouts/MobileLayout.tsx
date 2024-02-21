import { BottomTabs, MobileHeader } from '@/components/parts';

import { FC, ReactNode } from 'react';

interface IMobileLayoutProps {
  children: ReactNode;
}

export const MobileLayout: FC<IMobileLayoutProps> = ({ children }) => {
  return (
    // The top and bottom padding is intended to make space for the header and bottom tabs.
    <div className="pt-12 pb-16 min-h-screen">
      <MobileHeader />
      {children}
      <BottomTabs />
    </div>
  );
};
