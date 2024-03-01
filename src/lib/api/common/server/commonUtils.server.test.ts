// Target function to test
import { request } from './commonUtils.server';

// Mock fetch globally
global.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;

// Mock getToken function
jest.mock('./authTokenFetcher.server');
import { getToken as originalGetToken } from './authTokenFetcher.server';
const getToken = originalGetToken as jest.MockedFunction<typeof originalGetToken>;

interface ICreateMockResponseProps {
  responseBody?: unknown;
  ok?: boolean;
  status?: number;
  contentType?: string | undefined;
}

/**
 * Create a mock Response object
 * @param props.responseBody - Response body of the response
 * @param props.ok - Whether the response is OK or not
 * @param props.status - Status code of the response
 * @param props.contentType - Content type of the responses
 * @returns Mock Response object
 *
 * @example
 * const response = createMockResponse({ responseBody: { data: 'test' } });
 * const data = await response.json();
 * console.log(data); // { data: 'test' }
 */
const createMockResponse = ({
  responseBody = null,
  ok = true,
  status = 200,
  contentType = 'application/json',
}: ICreateMockResponseProps): Response => {
  const headers = new Headers();
  if (contentType && status !== 204) {
    headers.append('content-type', contentType);
  }
  return {
    ok,
    status,
    statusText: ok ? 'OK' : 'Error',
    headers,
    json: () => Promise.resolve(responseBody),
  } as Response;
};

describe('request function', () => {
  // Arrange mock data
  const mockUrl = 'https://example.com/api/test';
  const mockMethod = 'GET';
  const mockResponseBody = { data: 'test' };
  const mockToken = 'fake-token';

  // Clear mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should include correct Authorization header in the request', async () => {
    /* Arrange */
    getToken.mockResolvedValue(mockToken);
    (fetch as jest.Mock).mockResolvedValue(createMockResponse({}));

    /* Act */
    await request({ url: mockUrl, method: mockMethod });

    /* Assert */
    expect(fetch).toHaveBeenCalled();
    // Check if the Authorization header is included in the fetch options
    const fetchCall = (fetch as jest.MockedFunction<typeof fetch>).mock.calls[0];
    const fetchOptions = fetchCall[1] as RequestInit;
    expect(fetchOptions.headers).toBeDefined();
    const headers = fetchOptions.headers as Headers;
    expect(headers.get('Authorization')).toBe(`Bearer ${mockToken}`);
  });

  it('should throw an error when token is not available', async () => {
    /* Arrange */
    // Specify that the token is not available
    getToken.mockResolvedValue(undefined);

    /* Act */
    const promise = request({ url: mockUrl, method: mockMethod });

    /* Assert */
    await expect(promise).rejects.toThrow('Authentication token is not available');
  });

  it('should make an API call and return data if response body is JSON', async () => {
    /* Arrange */
    getToken.mockResolvedValue(mockToken);
    (fetch as jest.Mock).mockResolvedValue(createMockResponse({ responseBody: mockResponseBody }));

    /* Act */
    const result = await request({ url: mockUrl, method: mockMethod });

    /* Assert */
    expect(result).toEqual(mockResponseBody);
    expect(fetch).toHaveBeenCalledWith(mockUrl, expect.anything());
  });

  it('should return an empty object if the status code is 204', async () => {
    /* Arrange */
    getToken.mockResolvedValue(mockToken);
    (fetch as jest.Mock).mockResolvedValue(createMockResponse({ status: 204 }));

    /* Act */
    const result = await request({ url: mockUrl, method: mockMethod });

    /* Assert */
    expect(result).toEqual({}); // Empty object because the response body is not JSON
    expect(fetch).toHaveBeenCalledWith(mockUrl, expect.anything());
  });

  it('should throw an error when the response is not ok', async () => {
    /* Arrange */
    getToken.mockResolvedValue(mockToken);
    (fetch as jest.Mock).mockResolvedValue(
      createMockResponse({
        ok: false,
        status: 500,
      }),
    );

    /* Act & Assert */
    await expect(request({ url: mockUrl, method: mockMethod })).rejects.toThrow(
      'API error with status code 500:',
    );
  });
});
