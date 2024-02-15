import { getToken } from './authTokenFetcher.server';

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT';

/**
 * request method to Backend RESTful API from client component
 * @param url - url that you send a request to
 * @param method - HTTP method
 * @param body - HTTP request body
 * @returns Promise of the response data from the API server in JSON format
 *
 * @example
 * type Food = { name: string };
 * const result = await request<Food>({ url: 'https://example.com/api/foods/1', method: 'GET' });
 * console.log(result); // { name: 'Tomato' }
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
    throw new Error('Authentication token is not available');
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
    throw new Error(`API error with status code ${response.status}: ${response.statusText}`);
  }

  // Check if the response has content before attempting to parse it as JSON
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json() as Promise<T>;
  }
  return {} as Promise<T>;
};
