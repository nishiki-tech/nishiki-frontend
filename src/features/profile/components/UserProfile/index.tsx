'use client';
import { IconPen, IconPersonCircle } from '@/assets/images/icons';
import { Button, Icon } from '@/components/ui';
import { IUser } from '@/types/definition';

import { useState } from 'react';

import { RenameUserForm } from './RenameUserForm';

interface IUserProfileProps {
  /**
   * The id of the user.
   */
  userId: IUser['id'];
  /**
   * The name of the user.
   */
  name: IUser['name'];
}

export const UserProfile = ({ userId, name }: IUserProfileProps) => {
  const [isRenameUserFormOpen, setIsRenameUserFormOpen] = useState(false);

  /**
   * Open the rename user form when the pen icon is clicked.
   */
  const handlePenIconClick = () => {
    setIsRenameUserFormOpen(true);
  };
  return (
    <div className="flex flex-col items-center gap-4 pt-6">
      <Icon icon={IconPersonCircle} size={32} color="gray" />
      <div className="w-full px-24">
        {isRenameUserFormOpen ? (
          <RenameUserForm
            userId={userId}
            currentUserName={name}
            isOpen={isRenameUserFormOpen}
            onClose={() => setIsRenameUserFormOpen(false)}
          />
        ) : (
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl truncate">AAAA AAAA AAAA</span>
            <Button variant="ghost" className="min-w-5 h-5" onClick={handlePenIconClick}>
              <Icon icon={IconPen} color="primary" size={5} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
