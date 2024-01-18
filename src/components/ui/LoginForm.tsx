'use client';
import { getToken } from '@/lib/api/authTokenFetcher.client';

import { signInWithRedirect } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  const checkSession = useCallback(async () => {
    try {
      const idToken = await getToken();
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
