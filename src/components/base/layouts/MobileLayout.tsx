'use client';
import React from 'react';

import { BottomTab, MobileHeader } from '../parts';

interface Props {
  children: React.ReactNode;
}

const MobileLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <MobileHeader />
      {children}
      <BottomTab />
    </div>
  );
};

export default MobileLayout;
