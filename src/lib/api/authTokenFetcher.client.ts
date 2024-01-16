'use client';
import { configureClientAmplify } from '@/utils/amplify';

import { fetchAuthSession } from 'aws-amplify/auth';

// amplify setting
configureClientAmplify();

/**
 * get token from request cookie
 * @returns AuthTokens object
 */
export const getToken = async () => {
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
  return idToken?.toString();
};
