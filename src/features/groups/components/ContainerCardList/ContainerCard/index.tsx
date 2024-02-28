'use client';
import { ContainerIcon } from '@/assets/images/icons';
import { Card, Icon } from '@/components/ui';

import Link from 'next/link';
import { useState } from 'react';

import { ContainerCardDropdownMenuTriggerButton } from './ContainerCardDropdownMenuTriggerButton';
import { RenameContainerForm } from './RenameContainerForm';

export const ContainerCard = ({
  containerId,
  groupId,
  containerName,
}: {
  containerId: string;
  groupId: string;
  containerName: string;
}) => {
  const [isRenameFormOpen, setIsRenameFormOpen] = useState(false);

  const handleRenameClick = () => {
    console.log('rename');
    setIsRenameFormOpen(true);
  };

  const handleRenameFormClose = () => {
    setIsRenameFormOpen(false);
  };

  return isRenameFormOpen ? (
    <RenameContainerForm
      currentContainerName={containerName}
      isOpen={isRenameFormOpen}
      onClose={handleRenameFormClose}
    />
  ) : (
    <Card key={containerId} className="flex justify-between gap-2">
      <Link
        href={`/foods?group=${groupId}&container=${containerId}`}
        className="flex grow gap-4 items-center pl-4 py-2"
      >
        <div className="flex items-center justify-center bg-accent rounded-full w-11 h-11">
          <Icon icon={ContainerIcon} color="black" size={6} />
        </div>
        <span className="leading-5">{containerName}</span>
      </Link>
      <ContainerCardDropdownMenuTriggerButton handleRenameClick={handleRenameClick} />
    </Card>
  );
};
