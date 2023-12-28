'use client';
import { Amplify } from 'aws-amplify';
import {
  AuthUser,
  fetchAuthSession,
  getCurrentUser,
  signInWithRedirect,
  signOut,
} from 'aws-amplify/auth';
import { useEffect, useState } from 'react';

const OAUTH_DOMAIN: string = process.env.NEXT_PUBLIC_OAUTH_DOMAIN || '';
const LOCALHOST_URL: string = process.env.NEXT_PUBLIC_LOCALHOST_URL || '';
const OAUTH_REDIRECT_URL: string = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL || '';
const USER_POOL_ID: string = process.env.NEXT_PUBLIC_USER_POOL_ID || '';
const USER_POOL_CLIENT_ID: string = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || '';
Amplify.configure(
  {
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
  },
  { ssr: true },
);

export const LoginForm = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

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
      const { idToken } = (await fetchAuthSession()).tokens ?? {};
      console.log('idToken', idToken?.toString());
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser();
    currentSession();
  }, []);

  return (
    <div className="login-form">
      <button onClick={() => signInWithRedirect()}>Login </button>
      <br />
      <button onClick={() => signOut()}>Log Out</button>
      <div>{user ? 'log-in user: ' + user?.username : 'Not loggedin'}</div>
    </div>
  );
};
