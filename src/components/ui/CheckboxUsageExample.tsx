'use client';

import { ContainerIcon } from '@/assets/images/icons';
import { Card, Checkbox, Icon, Label } from '@/components/ui';

export const CheckboxUsageExample = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Example with text */}
      <Card asChild>
        <div className="flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-accent flex justify-center items-center">
              <Icon icon={ContainerIcon} size={5} color="black" />
            </div>
            <Label htmlFor="container1">Freezer</Label>
          </div>
          <Checkbox id="container1" />
        </div>
      </Card>
      {/* Example with disabled state */}
      <Card asChild>
        <div className="flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-accent flex justify-center items-center">
              <Icon icon={ContainerIcon} size={5} color="black" />
            </div>
            <Label htmlFor="container2">Disabled</Label>
          </div>
          <Checkbox id="container2" disabled />
        </div>
      </Card>
    </div>
  );
};
