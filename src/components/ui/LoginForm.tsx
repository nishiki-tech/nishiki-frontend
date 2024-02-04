'use client';
import { GoogleSigninIcon } from '@/assets/images/google';
import { Icon } from '@/components/ui';
import { getToken } from '@/lib/api/common/client';

import { signInWithRedirect } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  const checkSession = useCallback(async () => {
    try {
      const idToken = await getToken();
      console.log(idToken);
      if (idToken) {
        router.push('/groups');
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  if (isLoading) {
    return (
      <button
        disabled
        className="bg-white border border-gray rounded flex items-center justify-center h-10 px-8"
        onClick={() => signInWithRedirect()}
      >
        <div className="flex items-center justify-center h-5 mr-2 w-5">
          <Icon icon={GoogleSigninIcon} color="white" size={4} />
        </div>
        <span> Login in with Google</span>
      </button>
    );
  }

  return (
    <button
      className="bg-white border border-gray rounded flex items-center justify-center h-10 px-8"
      onClick={() => signInWithRedirect()}
    >
      <div className="flex items-center justify-center h-5 mr-2 w-5">
        <Icon icon={GoogleSigninIcon} color="white" size={4} />
      </div>
      <span> Login in with Google</span>
    </button>
  );
};
