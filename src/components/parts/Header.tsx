'use client';

import { ArrowLeftIcon, MenuCircleIcon } from '@/assets/images/icons';
import { Button, Icon } from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import Link from 'next/link';
import { ReactNode } from 'react';
import { UrlObject } from 'url';

interface IHeaderProps {
  heading?: string;
  left?: ReactNode;
  right?: ReactNode;
}

export const Header = ({ heading, left, right }: IHeaderProps) => {
  return (
    <header
      className={cn('fixed top-0 z-40 w-full h-12 bg-white flex items-center justify-center')}
    >
      {!!left && <div className="absolute left-0 h-full">{left}</div>}
      {!!heading && <h1 className="text-xl">{heading}</h1>}
      {!!right && <div className="absolute right-0 h-full">{right}</div>}
    </header>
  );
};

interface IBackButtonProps {
  href: UrlObject;
}

export const HeaderBackButton = ({ href }: IBackButtonProps) => {
  return (
    <Link href={href} className="h-full aspect-square pl-4 flex items-center">
      <Icon icon={ArrowLeftIcon} size={4} color="gray-dark" />
    </Link>
  );
};

export const HeaderMenuCircleButton = () => {
  return (
    <Button className="h-full px-4 flex items-center">
      <Icon icon={MenuCircleIcon} size={6} color="black" />
    </Button>
  );
};
