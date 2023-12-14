import React from 'react';

import { BottomTab, MobileHeader } from '../parts';

interface IMobileLayoutProps {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<IMobileLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <MobileHeader />
      {children}
      <BottomTab />
    </div>
  );
};
