'use client';
import React from 'react';

interface IUserProfileProps {
  name: string;
}

export const UserProfile = ({ name }: IUserProfileProps) => {
  return (
    <div className="flex justify-center">
      <p>name : {name}</p>
    </div>
  );
};
