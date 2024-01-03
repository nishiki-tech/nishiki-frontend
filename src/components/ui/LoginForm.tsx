'use client';
import { Amplify } from 'aws-amplify';
import { fetchAuthSession, signInWithRedirect } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const OAUTH_DOMAIN = process.env.NEXT_PUBLIC_OAUTH_DOMAIN || '';
const LOCALHOST_URL = process.env.NEXT_PUBLIC_LOCALHOST_URL || '';
const OAUTH_REDIRECT_URL = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL || '';
const USER_POOL_ID = process.env.NEXT_PUBLIC_USER_POOL_ID || '';
const USER_POOL_CLIENT_ID = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || '';

Amplify.configure(
  {
    Auth: {
      Cognito: {
        loginWith: {
          oauth: {
            domain: OAUTH_DOMAIN,
            scopes: ['openid'],
            responseType: 'code',
            redirectSignIn: [LOCALHOST_URL + '/login'],
            redirectSignOut: [LOCALHOST_URL, OAUTH_REDIRECT_URL],
          },
        },
        userPoolId: USER_POOL_ID,
        userPoolClientId: USER_POOL_CLIENT_ID,
      },
    },
  },
  { ssr: true },
);

export const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  const checkSession = useCallback(async () => {
    try {
      const { idToken } = (await fetchAuthSession()).tokens ?? {};
      console.log(idToken?.toString());

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
