'use client';

import { ArrowLeftIcon, MenuCircleIcon } from '@/assets/images/icons';
import { Icon } from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export const MobileHeader = () => {
  return (
    <header
      className={cn(
        'fixed top-0 z-40 w-full px-2 h-12 bg-white',
        'flex items-center justify-between',
      )}
    >
      <Button>
        <Icon icon={ArrowLeftIcon} color="black" size={4} />
      </Button>
      <Button>
        <Icon icon={MenuCircleIcon} color="black" size={6} />
      </Button>
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
