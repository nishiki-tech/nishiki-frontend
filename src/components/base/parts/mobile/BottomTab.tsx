'use client';
import { BottomTabIconLink } from '@/components/ui';
import { mainRouteConfig } from '@/const/site/mainRouteConfig';

import { usePathname } from 'next/navigation';
import React from 'react';

export const BottomTab = () => {
  const pathName = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-light">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <BottomTabIconLink name="groups" isSelected={pathName === mainRouteConfig['groups'].path} />
        <BottomTabIconLink name="foods" isSelected={pathName === mainRouteConfig['foods'].path} />
        <BottomTabIconLink
          name="profile"
          isSelected={pathName === mainRouteConfig['profile'].path}
        />
      </div>
    </div>
  );
};
