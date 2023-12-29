import { BottomTab, MobileHeader } from '@/components/parts';

import { FC, ReactNode } from 'react';

interface IMobileLayoutProps {
  children: ReactNode;
}

export const MobileLayout: FC<IMobileLayoutProps> = ({ children }) => {
  return (
    <div className="relative pt-12 pb-16 flex min-h-screen flex-col">
      <MobileHeader />
      {children}
      <BottomTab />
    </div>
  );
};
