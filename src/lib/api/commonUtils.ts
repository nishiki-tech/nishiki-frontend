import { getToken } from './authTokenFetcher';

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT';

/**
 * Option parameters of HTTP request
 */
interface Options {
  method: HttpMethod;
  headers: Record<string, string>;
  body?: string;
}

/**
 * request method to Backend RESTful API
 * @param url url that you send a request to
 * @param method HTTP method
 * @param body HTTP request body
 * @returns Promise with Generics Objects
 */
export const request = async <T>(url: string, method: HttpMethod, body?: string): Promise<T> => {
  const token = await getToken();
  if (!token) {
    throw new Error(`API Unauthorized error.`);
  }
  const headers: Record<string, string> = {};
  const options: Options = {
    method: method,
    headers: {
      Authorization: 'Bearer ' + token?.idToken?.toString(),
    },
  };
  if (body) {
    options.body = body;
    headers['Content-Type'] = 'application/json';
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error. status: ${response.status}`);
  }
  return response.json() as Promise<T>;
};
