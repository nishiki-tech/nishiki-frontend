// Target function to test
import { request } from './commonUtils.client';

// Mock fetch and getToken
global.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;
// Mock fetch globally

// Mock getToken function
jest.mock('./authTokenFetcher.client');
import { getToken as originalGetToken } from './authTokenFetcher.client';
const getToken = originalGetToken as jest.MockedFunction<typeof originalGetToken>;

describe('request function', () => {
  const mockUrl = 'https://example.com/api/test';
  const mockMethod = 'GET';
  const mockResponseData = { data: 'test' };
  const mockToken = 'fake-token';

  // Clear mocks before each test
  beforeEach(() => {
    (fetch as jest.MockedFunction<typeof fetch>).mockClear();
    getToken.mockClear();
  });

  it('should include correct Authorization header in the request', async () => {
    /* Arrange */
    getToken.mockResolvedValue(mockToken);
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
      headers: {
        get: jest.fn(),
      },
    } as unknown as Response);

    /* Act */
    await request({ url: mockUrl, method: mockMethod });

    /* Assert */
    expect(fetch).toHaveBeenCalled();
    // Check the headers in the fetch call
    const fetchCall = (fetch as jest.MockedFunction<typeof fetch>).mock.calls[0];
    const fetchOptions = fetchCall[1] as RequestInit;
    expect(fetchOptions.headers).toBeDefined();
    const headers = fetchOptions.headers as Record<string, string>;
    expect(headers['Authorization']).toBe(`Bearer ${mockToken}`);
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
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      headers: {
        get: jest.fn(() => 'application/json'), // Specify the content type as JSON
      },
      json: () => Promise.resolve(mockResponseData),
    } as unknown as Response);

    /* Act */
    const result = await request({ url: mockUrl, method: mockMethod });

    /* Assert */
    expect(result).toEqual(mockResponseData);
    expect(fetch).toHaveBeenCalledWith(mockUrl, expect.anything());
  });

  it('should make an API call and return data if response body is not JSON', async () => {
    /* Arrange */
    getToken.mockResolvedValue(mockToken);
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      headers: {
        get: jest.fn(() => 'text/html'), // Non-JSON content type
      },
      json: () => Promise.resolve(mockResponseData),
    } as unknown as Response);

    /* Act */
    const result = await request({ url: mockUrl, method: mockMethod });

    /* Assert */
    expect(result).toEqual({}); // Empty object because the response body is not JSON
    expect(fetch).toHaveBeenCalledWith(mockUrl, expect.anything());
  });

  it('should throw an error when the response is not ok', async () => {
    /* Arrange */
    getToken.mockResolvedValue(mockToken);
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'API response error',
      headers: {
        get: jest.fn(() => 'application/json'),
      },
      json: () => Promise.resolve({ message: 'Server error' }),
    } as unknown as Response);

    /* Act & Assert */
    await expect(request({ url: mockUrl, method: mockMethod })).rejects.toThrow(
      'API error with status code 500: API response error',
    );
  });
});
