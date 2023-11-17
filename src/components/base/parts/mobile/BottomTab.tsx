import { FoodsIconLink, GroupsIconLink, ProfileIconLink } from '@/components/ui';
import { mainRouteConfig } from '@/const/site/mainRouteConfig';

import { usePathname } from 'next/navigation';
import React from 'react';

const BottomTab = () => {
  const pathName = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-popover border-t border-border">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        {/* Q : Color for each of icons are set to be #77777(secondary color) but doesn't it have to be #22222(popover-foreground)? */}
        <GroupsIconLink name={'groups'} isSelected={pathName === mainRouteConfig['groups']} />
        <FoodsIconLink name={'foods'} isSelected={pathName === mainRouteConfig['foods']} />
        <ProfileIconLink name={'profile'} isSelected={pathName === mainRouteConfig['profile']} />
      </div>
    </div>
  );
};

export default BottomTab;
