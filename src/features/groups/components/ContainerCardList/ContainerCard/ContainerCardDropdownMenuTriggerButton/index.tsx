import { IconMenuKebab } from '@/assets/images/icons';
import { Button, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';
import { IContainer } from '@/types/definition';

import { useState } from 'react';

import { ContainerCardDropdownMenuContent } from './ContainerCardDropdownMenuContent';

interface IContainerCardDropdownMenuProps {
  /**
   * An identifier of a container which a user is willing to delete
   */
  containerId: IContainer['id'];
  /**
   * A function to open rename form input field
   */
  onRenameClick: () => void;
}

export const ContainerCardDropdownMenuTriggerButton = ({
  containerId,
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
        containerId={containerId}
        onRenameClick={onRenameClick}
        onDropdownMenuClose={() => setIsDropdownMenuOpen(false)}
      />
    </DropdownMenu>
  );
};
