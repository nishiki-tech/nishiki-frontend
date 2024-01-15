import { Amplify } from 'aws-amplify';

const OAUTH_DOMAIN = process.env.NEXT_PUBLIC_OAUTH_DOMAIN || '';
const LOCALHOST_URL = process.env.NEXT_PUBLIC_LOCALHOST_URL || '';
const OAUTH_REDIRECT_URL = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL || '';
const USER_POOL_ID = process.env.NEXT_PUBLIC_USER_POOL_ID || '';
const USER_POOL_CLIENT_ID = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || '';

/**
 * configure Amplify setting for Client Component
 */
export const configureClientAmplify = () => {
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
};
