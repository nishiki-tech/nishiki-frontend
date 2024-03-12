import { createServerRunner } from '@aws-amplify/adapter-nextjs';
const OAUTH_DOMAIN: string = process.env.NEXT_PUBLIC_OAUTH_DOMAIN || '';
const CLIENT_BASE_URL: string = process.env.NEXT_PUBLIC_CLIENT_BASE_URL || '';
const USER_POOL_ID: string = process.env.NEXT_PUBLIC_USER_POOL_ID || '';
const USER_POOL_CLIENT_ID: string = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || '';

/**
 * configure Amplify setting for Server Component
 */
export const { runWithAmplifyServerContext } = createServerRunner({
  config: {
    Auth: {
      Cognito: {
        loginWith: {
          oauth: {
            domain: OAUTH_DOMAIN,
            scopes: ['openid'],
            responseType: 'code',
            redirectSignIn: [CLIENT_BASE_URL + '/login'],
            redirectSignOut: [`${CLIENT_BASE_URL}/login`, `https://${OAUTH_DOMAIN}`],
          },
        },
        userPoolId: USER_POOL_ID,
        userPoolClientId: USER_POOL_CLIENT_ID,
      },
    },
  },
});
