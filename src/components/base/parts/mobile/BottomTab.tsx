import { FoodsIconLink, GroupsIconLink, ProfileIconLink } from '@/components/ui';
import { mainRouteConfig } from '@/const/site/mainRouteConfig';

import { usePathname } from 'next/navigation';
import React from 'react';

export const BottomTab = () => {
  const pathName = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-popover border-t border-border">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <GroupsIconLink isSelected={pathName === mainRouteConfig['groups']} />
        <FoodsIconLink isSelected={pathName === mainRouteConfig['foods']} />
        <ProfileIconLink isSelected={pathName === mainRouteConfig['profile']} />
      </div>
    </div>
  );
};
