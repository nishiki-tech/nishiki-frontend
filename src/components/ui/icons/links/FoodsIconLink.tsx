import { mainRouteConfig, MainRouteName } from '@/const/site/mainRouteConfig';
import { cn } from '@/lib/tailwind/utils';

import { Apple } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  name: MainRouteName;
  isSelected: boolean;
  className?: string;
}

const name = 'foods';

const FoodsIconLink: React.FC<Props> = ({ isSelected, className }) => {
  return (
    <Link
      href={mainRouteConfig[name]}
      className="inline-flex flex-col items-center justify-center px-5"
    >
      <Apple className={cn(isSelected ? 'stroke-primary' : 'stroke-secondary', className)} />
      <span className={cn('text-sm', isSelected ? 'text-primary' : 'text-secondary')}>{name}</span>
    </Link>
  );
};

export default FoodsIconLink;
