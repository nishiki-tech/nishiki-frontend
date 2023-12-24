'use client';

import { MenuMeatballIcon, PlusIcon } from '@/assets/images/icons';
import { Icon } from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import React, { ButtonHTMLAttributes, FC } from 'react';

interface IContentListHeaderProps {
  onMenuButtonClick: () => void;
  onPlusButtonClick: () => void;
  title?: string;
}

export const ContentListHeader: FC<IContentListHeaderProps> = ({
  onMenuButtonClick,
  onPlusButtonClick,
  title,
}) => {
  return (
    <div
      className={cn('h-12 w-full', 'flex items-center', title ? 'justify-between' : 'justify-end')}
    >
      {title && (
        <div>
          <h2>{title}</h2>
        </div>
      )}
      <div className="flex justify-center items-center gap-0.5">
        <IconButton onClick={onMenuButtonClick}>
          <Icon icon={MenuMeatballIcon} size={5} />
        </IconButton>
        <IconButton onClick={onPlusButtonClick}>
          <Icon icon={PlusIcon} size={4} />
        </IconButton>
      </div>
    </div>
  );
};

const IconButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button className="flex items-center justify-center w-12 h-12" {...props}>
      {children}
    </button>
  );
};
