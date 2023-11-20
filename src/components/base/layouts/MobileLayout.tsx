'use client';
import React from 'react';

import { BottomTab, MobileHeader } from '../parts';

interface Props {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <MobileHeader />
      {children}
      <BottomTab />
    </div>
  );
};
