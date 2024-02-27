import { MenuKebabIcon } from '@/assets/images/icons';
import { Button, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';

import { ContainerDropdownMenuContent } from './ContainerDropdownMenuContent';

export const ContainerDropdownMenuTriggerButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12">
          <Icon icon={MenuKebabIcon} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
      <ContainerDropdownMenuContent />
    </DropdownMenu>
  );
};
