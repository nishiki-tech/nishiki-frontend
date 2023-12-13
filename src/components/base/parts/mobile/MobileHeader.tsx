'use client';

import { ArrowLeftIcon, MenuCircleIcon } from '@/assets/images/icons';
import { Icon } from '@/components/ui';

import React from 'react';

export const MobileHeader = () => {
  console.log(ArrowLeftIcon);

  return (
    <header className="bg-white sticky top-0 z-40 w-full">
      <div className="flex px-2 h-12 items-center justify-between">
        <Button>
          <Icon icon={ArrowLeftIcon} color="black" size={4} />
        </Button>
        <Button>
          <Icon icon={MenuCircleIcon} color="black" size={6} />
        </Button>
      </div>
    </header>
  );
};

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button className="h-full aspect-square flex items-center justify-center" {...props}>
      {children}
    </button>
  );
};
