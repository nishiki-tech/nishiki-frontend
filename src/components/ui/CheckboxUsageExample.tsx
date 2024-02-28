'use client';
/**
 * This file is used as an example for the Checkbox components.
 * Once we're done with the example, we can delete this file.
 */
import { IconContainer } from '@/assets/images/icons';
import { Card, Checkbox, Icon, Label } from '@/components/ui';

export const CheckboxUsageExample = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Example with text */}
      <Card asChild>
        <Label htmlFor="container1" className="flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-accent flex justify-center items-center">
              <Icon icon={IconContainer} size={5} color="black" />
            </div>
            <span>Freezer</span>
          </div>
          <Checkbox id="container1" />
        </Label>
      </Card>
      {/* Example with disabled state */}
      <Card asChild>
        <Label htmlFor="container2" className="flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-accent flex justify-center items-center">
              <Icon icon={IconContainer} size={5} color="black" />
            </div>
            <span>Disabled</span>
          </div>
          <Checkbox id="container2" disabled />
        </Label>
      </Card>
    </div>
  );
};
