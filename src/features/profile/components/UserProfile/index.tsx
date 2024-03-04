'use client';
import { IconPen, IconPersonCircle } from '@/assets/images/icons';
import { Button, Icon } from '@/components/ui';
import { IUser } from '@/types/definition';

import { useState } from 'react';

import { RenameUserForm } from './RenameUserForm';

interface IUserProfileProps {
  /**
   * The name of the user to display.
   */
  name: IUser['name'];
}

export const UserProfile = ({ name }: IUserProfileProps) => {
  const [isRenameUserFormOpen] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4 pt-6">
      <Icon icon={IconPersonCircle} size={32} color="gray" />
      {isRenameUserFormOpen ? (
        <RenameUserForm />
      ) : (
        <div className="w-32 flex items-center justify-end gap-4 px-1">
          <span className="text-xl truncate">{name}</span>
          <Button variant="ghost" className="w-5 h-5">
            <Icon icon={IconPen} color="primary" size={5} />
          </Button>
        </div>
      )}
    </div>
  );
};
