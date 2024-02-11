'use client';

import '@aws-amplify/ui-react/styles.css';

import { getToken } from '@/lib/api/common/client';

import { Authenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export const LoginForm = () => {
  const router = useRouter();

  const checkSession = useCallback(async () => {
    try {
      const idToken = await getToken();
      console.log(idToken);
      if (idToken) {
        router.push('/groups');
      }
    } catch (err) {}
  }, [router]);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  // const signInWithGoogle = async () => {
  //   try {
  //     await Auth.federatedSignIn({ provider: 'Google' });
  //   } catch (error) {
  //     console.error('Error signing in with Google:', error);
  //   }
  // };

  return (
    // <button onClick={signInWithGoogle}>Sign in with Google</button>
    <Authenticator socialProviders={['google']} hideSignUp={true} />
  );
};
