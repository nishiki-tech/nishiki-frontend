'use client';
import { configureClientAmplify } from '@/utils/amplify';

import { fetchAuthSession, signInWithRedirect } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

// amplify setting
configureClientAmplify();

export const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  const checkSession = useCallback(async () => {
    try {
      const { idToken } = (await fetchAuthSession()).tokens ?? {};

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
    return <div>Loading...</div>;
  }

  return (
    <div className="login-form">
      <button onClick={() => signInWithRedirect()}>Login</button>
    </div>
  );
};
