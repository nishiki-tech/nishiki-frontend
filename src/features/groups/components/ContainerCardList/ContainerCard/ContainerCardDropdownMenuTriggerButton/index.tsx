import { IconMenuKebab } from '@/assets/images/icons';
import { Button, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';

import { useState } from 'react';

import { ContainerCardDropdownMenuContent } from './ContainerCardDropdownMenuContent';

interface IContainerCardDropdownMenuProps {
  /**
   * A function to open rename form input field
   */
  onRenameClick: () => void;
}

export const ContainerCardDropdownMenuTriggerButton = ({
  onRenameClick,
}: IContainerCardDropdownMenuProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  return (
    <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12">
          <Icon icon={IconMenuKebab} size={4.5} />
        </Button>
      </DropdownMenuTrigger>
      <ContainerCardDropdownMenuContent
        onRenameClick={onRenameClick}
        onDropdownMenuClose={() => setIsDropdownMenuOpen(false)}
      />
    </DropdownMenu>
  );
};
