import { getToken } from './authTokenFetcher';

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT';

/**
 * request method to Backend RESTful API from server component
 * @param url url that you send a request to
 * @param method HTTP method
 * @param body HTTP request body
 * @returns Promise with Generics Objects
 */
export const request = async <T>({
  url,
  method,
  options,
}: {
  url: string;
  method: HttpMethod;
  options?: Omit<RequestInit, 'method' | 'headers'>;
}): Promise<T> => {
  const token = await getToken();
  if (!token) {
    throw new Error('API Unauthorized error.');
  }
  // headers with Authorization
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
  };
  // Request body
  if (options?.body) {
    headers['Content-Type'] = 'application/json';
  }
  const fetchOptions: RequestInit = {
    method: method,
    headers: headers,
    ...options,
  };
  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new Error(`HTTP error. status: ${response.status}`);
  }
  return response.json() as Promise<T>;
};
