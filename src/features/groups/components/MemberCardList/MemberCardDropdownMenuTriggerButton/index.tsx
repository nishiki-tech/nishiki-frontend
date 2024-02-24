import { MenuKebabIcon } from '@/assets/images/icons';
import { Button, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';

import { MemberCardDropdownMenuContent } from './MemberCardDropdownMenuContent';

export const MemberCardDropdownMenuTriggerButton = ({}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12">
          <Icon icon={MenuKebabIcon} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
      <MemberCardDropdownMenuContent />
    </DropdownMenu>
  );
};
