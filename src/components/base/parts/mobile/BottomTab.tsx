import { IconLink } from '@/components/ui';

import React from 'react';

const BottomTab = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <IconLink name={'groups'} />
        <IconLink name={'foods'} />
        <IconLink name={'profile'} />
      </div>
    </div>
  );
};

export default BottomTab;
