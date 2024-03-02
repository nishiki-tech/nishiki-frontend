const NODE_ENV = process.env.NODE_ENV || '';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const OAUTH_DOMAIN = process.env.NEXT_PUBLIC_OAUTH_DOMAIN || '';
const USER_POOL_ID = process.env.NEXT_PUBLIC_USER_POOL_ID || '';
const USER_POOL_CLIENT_ID = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || '';

/**
 * Check if the API is a mock API.
 * @returns true if the API is a mock API, false otherwise
 */
export const isMockApi = (): boolean => {
  return API_BASE_URL.startsWith('http://localhost');
};

/**
 * Check if authentication is required.
 * If the environment is development and the API is a mock API, then it's regarded as authentication not required.
 * it's regarded in the development mode and authentication is not required.
 *
 * @returns true if authentication is required, false otherwise
 */
export const authRequired = () => {
  if (NODE_ENV === 'development' && (!OAUTH_DOMAIN || !USER_POOL_ID || !USER_POOL_CLIENT_ID)) {
    return false;
  }
  return true;
};
