import React, { FC, ReactNode } from 'react';

import { BottomTab, MobileHeader } from '../parts';

interface Props {
  children: ReactNode;
}

export const MobileLayout: FC<Props> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <MobileHeader />
      {children}
      <BottomTab />
    </div>
  );
};
