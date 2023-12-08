'use client';
import { Amplify } from 'aws-amplify';
import {
  AuthUser,
  fetchAuthSession,
  getCurrentUser,
  signInWithRedirect,
  signOut,
} from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import React, { useEffect, useState } from 'react';

const OAUTH_DOMAIN: string = process.env.NEXT_PUBLIC_OAUTH_DOMAIN || '';
const LOCALHOST_URL: string = process.env.NEXT_PUBLIC_LOCALHOST_URL || '';
const OAUTH_REDIRECT_URL: string = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL || '';
const USER_POOL_ID: string = process.env.NEXT_PUBLIC_USER_POOL_ID || '';
const USER_POOL_CLIENT_ID: string = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || '';
Amplify.configure({
  Auth: {
    Cognito: {
      loginWith: {
        oauth: {
          domain: OAUTH_DOMAIN, // OAuth domain
          scopes: ['openid'], // Scope needed
          responseType: 'code',
          redirectSignIn: [LOCALHOST_URL, OAUTH_REDIRECT_URL],
          redirectSignOut: [LOCALHOST_URL, OAUTH_REDIRECT_URL],
        },
      },
      userPoolId: USER_POOL_ID,
      userPoolClientId: USER_POOL_CLIENT_ID,
    },
  },
});

export const LoginForm = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [, setError] = useState<unknown>(null);
  const [, setCustomState] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload }) => {
      switch (payload.event) {
        case 'signInWithRedirect':
          getUser();
          break;
        case 'signInWithRedirect_failure':
          setError('An error has ocurred during the Oauth flow.');
          break;
        case 'customOAuthState':
          setCustomState(payload.data);
          break;
      }
    });

    getUser();
    currentSession();

    return unsubscribe;
  }, []);

  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await getCurrentUser();
      console.log('currentUser', currentUser);
      setUser(currentUser);
    } catch (error) {
      console.error(error);
      console.log('Not signed in');
    }
  };

  async function currentSession() {
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
      console.log('accessToken, idToken', accessToken, idToken);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="login-form">
      <button onClick={() => signInWithRedirect()}>Open Hosted UI</button>
      <button onClick={() => signOut()}>Sign Out</button>
      <div>{user?.username}</div>
    </div>
  );
};
