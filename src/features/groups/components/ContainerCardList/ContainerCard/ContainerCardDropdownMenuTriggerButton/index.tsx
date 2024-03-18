import { IconMenuKebab } from '@/assets/images/icons';
import { Button, DialogRoot, DropdownMenu, DropdownMenuTrigger, Icon } from '@/components/ui';
import { IContainer } from '@/types/definition';

import { useState } from 'react';

import { ContainerCardDropdownMenuContent } from './ContainerCardDropdownMenuContent';
import { DeleteContainerDialogContent } from './ContainerCardDropdownMenuContent/DeleteContainerDialogContent';

interface IContainerCardDropdownMenuProps {
  /**
   * An identifier of a container which a user is willing to delete
   */
  containerId: IContainer['id'];
  /**
   * A function to open rename form input field
   */
  onRenameContainerClick: () => void;
}

export const ContainerCardDropdownMenuTriggerButton = ({
  containerId,
  onRenameContainerClick,
}: IContainerCardDropdownMenuProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isDeleteContainerDialogOpen, setIsDeleteContainerDialogOpen] = useState(false);

  return (
    <>
      <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-12">
            <Icon icon={IconMenuKebab} size={4.5} />
          </Button>
        </DropdownMenuTrigger>
        <ContainerCardDropdownMenuContent
          onRenameContainerClick={onRenameContainerClick}
          onDeleteContainerDialogOpen={() => {
            setIsDeleteContainerDialogOpen(true);
          }}
        />
      </DropdownMenu>
      <DialogRoot open={isDeleteContainerDialogOpen} onOpenChange={setIsDeleteContainerDialogOpen}>
        <DeleteContainerDialogContent
          containerId={containerId}
          onParentClose={() => {
            setIsDropdownMenuOpen(false);
          }}
          onDialogClose={() => {
            setIsDeleteContainerDialogOpen(false);
          }}
        />
      </DialogRoot>
    </>
  );
};
