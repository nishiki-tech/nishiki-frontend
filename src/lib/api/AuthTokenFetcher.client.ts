import { fetchAuthSession } from 'aws-amplify/auth';

/**
 * get token from request cookie
 * @returns AuthTokens object
 */
export const getToken = async () => {
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
  return idToken?.toString();
};
