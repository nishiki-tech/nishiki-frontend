'use client';

import { Icon } from '@/components/ui';

import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export const MobileHeader = () => {
  return (
    <header className="bg-white sticky top-0 z-40 w-full">
      <div className="flex px-2 h-12 items-center justify-between">
        <Button>
          <Icon iconName="arrowLeft" color="black" />
        </Button>
        <Button>
          <Icon iconName="menuCircle" color="black" />
        </Button>
      </div>
    </header>
  );
};

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button className="h-full aspect-square flex items-center justify-center" {...props}>
      {children}
    </button>
  );
};
