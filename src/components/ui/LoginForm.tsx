'use client';

import '@aws-amplify/ui-react/styles.css';

import { getToken } from '@/lib/api/common/client';

import { Authenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export const LoginForm = () => {
  const router = useRouter();

  const checkSession = useCallback(async () => {
    const idToken = await getToken();
    if (idToken) {
      router.push('/groups');
    }
  }, [router]);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return <Authenticator socialProviders={['google']} hideSignUp={true} />;
};
