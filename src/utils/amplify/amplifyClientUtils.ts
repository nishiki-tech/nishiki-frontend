import { Amplify } from 'aws-amplify';

const OAUTH_DOMAIN = process.env.NEXT_PUBLIC_OAUTH_DOMAIN || '';
const CLIENT_BASE_URL = process.env.NEXT_PUBLIC_CLIENT_BASE_URL || '';
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
              redirectSignIn: [`${CLIENT_BASE_URL}/login`],
              redirectSignOut: [`${CLIENT_BASE_URL}/login`],
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
