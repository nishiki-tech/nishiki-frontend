'use client';

import { LogoVerticalPrimary } from '@/assets/images/logos';
import { Spinner } from '@/assets/images/ui';
import { Icon, WhiteOverlay } from '@/components/ui';
import { LoginForm } from '@/features/auth/components/LoginForm/LoginForm';
import { cn } from '@/lib/tailwind/utils';

import { useEffect, useState } from 'react';

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  /**
   * If the loading state is still true after a certain amount of time, set it to false and show an error message.
   * This is to prevent the loading spinner from being displayed indefinitely.
   */
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    if (isLoading) {
      timeout = setTimeout(() => {
        setIsLoading(false);
        alert('Something went wrong. Please try again.');
      }, 15000); // 15 seconds
    }
    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <>
      {/* Loading Spinner & White Overlay */}
      {isLoading && (
        <div
          className={cn(
            'z-50 absolute left-0 top-0 w-screen h-screen',
            'flex items-center justify-center',
          )}
        >
          <WhiteOverlay />
          <Icon icon={Spinner} color="primary" size={10} className="z-50 animate-spin" />
        </div>
      )}
      {/* The main content of the page */}
      <div className="flex items-center justify-center h-screen">
        <div className="transform flex flex-col items-center justify-center">
          <LogoVerticalPrimary className="w-32 h-26 mb-20" />
          <LoginForm setIsLoading={setIsLoading} />
        </div>
      </div>
    </>
  );
};
