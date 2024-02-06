'use client';
import { Card } from '@/components/ui';

import Link from 'next/link';
import { FC, useState } from 'react';

import { ContainerCount } from './ContainerCount';
import { GroupCardMenuButton } from './GroupCardMenuButton';
import { RenameGroupForm } from './RenameGroupForm';
import { UserCount } from './UserCount';

interface IGroupCardContentProps {
  groupId: string;
  groupName: string;
  containerCount: number;
  userCount: number;
}

export const GroupCardContent: FC<IGroupCardContentProps> = ({
  groupId,
  groupName,
  containerCount,
  userCount,
}) => {
  const [isRenameFormOpen, setIsRenameFormOpen] = useState(false);

  const handleRenameClick = () => {
    setIsRenameFormOpen(true);
  };

  const handleRenameFormClose = () => {
    setIsRenameFormOpen(false);
  };

  return (
    <Card className="flex justify-between gap-2">
      {isRenameFormOpen ? (
        <RenameGroupForm
          currentGroupName={groupName}
          containerCount={containerCount}
          userCount={userCount}
          isOpen={isRenameFormOpen}
          onClose={handleRenameFormClose}
        />
      ) : (
        <Link href={`/groups/${groupId}`} className="flex grow flex-col gap-3 pl-4 py-2">
          <span className="text-lg leading-6">{groupName}</span>
          <div className="w-full flex justify-between items-center">
            <ContainerCount containerCount={containerCount} />
            <UserCount userCount={userCount} />
          </div>
        </Link>
      )}
      <GroupCardMenuButton handleRenameClick={handleRenameClick} />
    </Card>
  );
};
