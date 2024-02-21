'use client';

import { MainRouteKey, mainRoutes } from '@/const/site/mainRouteConfig';

import { BottomTabLink } from './BottomTabLink';

export const BottomTabs = () => {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full h-16 bg-white border-t border-gray-light">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        {Object.keys(mainRoutes).map((routeName) => {
          return <BottomTabLink key={routeName} name={routeName as MainRouteKey} />;
        })}
      </div>
    </div>
  );
};
