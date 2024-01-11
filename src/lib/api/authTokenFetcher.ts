import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';

import { AuthTokens } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';

/**
 * get token from request cookie
 * @returns AuthTokens object
 */
export const getToken = async () => {
  const token: AuthTokens | undefined = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session.tokens;
      } catch (error) {
        return undefined;
      }
    },
  });
  return token;
};
