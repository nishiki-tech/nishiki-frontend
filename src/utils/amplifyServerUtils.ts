import { createServerRunner } from '@aws-amplify/adapter-nextjs';
const OAUTH_DOMAIN: string = process.env.NEXT_PUBLIC_OAUTH_DOMAIN || '';
const LOCALHOST_URL: string = process.env.NEXT_PUBLIC_LOCALHOST_URL || '';
const OAUTH_REDIRECT_URL: string = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL || '';
const USER_POOL_ID: string = process.env.NEXT_PUBLIC_USER_POOL_ID || '';
const USER_POOL_CLIENT_ID: string = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || '';

export const { runWithAmplifyServerContext } = createServerRunner({
  config: {
    Auth: {
      Cognito: {
        loginWith: {
          oauth: {
            domain: OAUTH_DOMAIN, // OAuth domain
            scopes: ['openid'], // Scope needed
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
});
