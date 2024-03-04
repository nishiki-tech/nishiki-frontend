'use client';
import { IconMenuCircle } from '@/assets/images/icons';
import { Button, Icon } from '@/components/ui';

export const GroupMeatballMenu = () => {
  const testClicked = () => {
    console.log('clicked');
  };

  return (
    <Button className="h-full px-4 flex items-center" onClick={testClicked}>
      <Icon icon={IconMenuCircle} size={6} color="black" />
    </Button>
  );
};
