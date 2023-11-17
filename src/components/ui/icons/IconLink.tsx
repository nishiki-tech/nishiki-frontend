import { mainRouteConfig, MainRouteName } from '@/const/site/mainRouteConfig';

import { Apple, Home, UserCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const IconLinkMap = {
  groups: () => <Home className={'stroke-secondary group-hover:stroke-primary'} />,
  foods: () => <Apple className={'stroke-secondary group-hover:stroke-primary'} />,
  profile: () => <UserCircle className={'stroke-secondary group-hover:stroke-primary'} />,
};

interface Props {
  name: MainRouteName;
}

const IconLink: React.FC<Props> = ({ name }) => {
  const IconComponent = IconLinkMap[name];
  return (
    <Link
      href={mainRouteConfig[name]}
      className="inline-flex flex-col items-center justify-center px-5 group"
    >
      <IconComponent />
      <span className="text-sm text-secondary group-hover:text-primary">{name}</span>
    </Link>
  );
};

export default IconLink;
