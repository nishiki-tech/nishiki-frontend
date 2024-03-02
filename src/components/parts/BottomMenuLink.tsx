import { Icon } from '@/components/ui';
import { MainRouteKey, mainRoutes } from '@/const/site/mainRouteConfig';
import { cn } from '@/lib/tailwind/utils';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UrlObject } from 'url';

interface IBottomMenuLinkProps {
  name: MainRouteKey;
}

export const BottomMenuLink = ({ name }: IBottomMenuLinkProps) => {
  // Check if the icon is selected based on the current path
  const pathName = usePathname();
  const isSelected = pathName.startsWith(mainRoutes[name].path);

  // Create a URL object based on the path
  const urlObject: UrlObject = {
    pathname: mainRoutes[name].path,
  };

  return (
    <Link href={urlObject} className="inline-flex flex-col items-center justify-center">
      <Icon
        icon={mainRoutes[name].icons[isSelected ? 'on' : 'off']}
        size={6}
        color={isSelected ? 'primary' : 'gray-dark'}
        className="mb-1"
      />
      <span className={cn('text-xs', isSelected ? 'text-primary' : 'text-gray-dark')}>
        {mainRoutes[name].label}
      </span>
    </Link>
  );
};
