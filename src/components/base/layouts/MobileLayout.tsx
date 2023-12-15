import { FC, ReactNode } from 'react';

import { BottomTab, MobileHeader } from '../parts';

interface IMobileLayoutProps {
  children: ReactNode;
}

export const MobileLayout: FC<IMobileLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <MobileHeader />
      {children}
      <BottomTab />
    </div>
  );
};
