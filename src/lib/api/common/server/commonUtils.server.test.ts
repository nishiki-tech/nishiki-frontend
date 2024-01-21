import { getToken as originalGetToken } from '@/lib/api/common/server/authTokenFetcher.server';
const getToken = originalGetToken as jest.MockedFunction<typeof originalGetToken>;

// test target method
import { request } from './commonUtils.server';

// Mock fetch and getToken
global.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;
jest.mock('@/lib/api/common/server/authTokenFetcher.server');

describe('request function', () => {
  const mockUrl = 'https://example.com/api/test';
  const mockMethod = 'GET';
  const mockResponseData = { data: 'test' };
  const mockToken = 'fake-token';

  beforeEach(() => {
    (fetch as jest.MockedFunction<typeof fetch>).mockClear();
    (getToken as jest.MockedFunction<typeof getToken>).mockClear();
  });

  it('should make an API call and return data', async () => {
    getToken.mockResolvedValue(mockToken);
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      headers: {
        get: jest.fn(),
      },
      json: () => Promise.resolve(mockResponseData),
    } as unknown as Response);
    // Execute test
    const result = await request({ url: mockUrl, method: mockMethod });
    // Expect
    expect(result).toEqual(mockResponseData);
    expect(fetch).toHaveBeenCalledWith(mockUrl, expect.anything());
  });

  it('should include correct Authorization header in the request', async () => {
    getToken.mockResolvedValue(mockToken);

    // Mock fetch response
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
    } as unknown as Response);

    // Execute test
    await request({ url: mockUrl, method: mockMethod });
    // Expect
    expect(fetch).toHaveBeenCalled();
    // Check the headers in the fetch call
    const fetchCall = (fetch as jest.MockedFunction<typeof fetch>).mock.calls[0];
    const fetchOptions = fetchCall[1] as RequestInit;
    expect(fetchOptions.headers).toBeDefined();
    const headers = fetchOptions.headers as Record<string, string>;
    expect(headers['Authorization']).toBe(`Bearer ${mockToken}`);
  });

  it('should throw an error when the response is not ok', async () => {
    getToken.mockResolvedValue(mockToken);
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'API response error',
      headers: {
        get: jest.fn(),
      },
      json: () => Promise.reject(),
    } as unknown as Response);
    // Execute test
    const result = request({ url: mockUrl, method: mockMethod });
    // Expect
    await expect(result).rejects.toThrow('HTTP error. status: 500');
  });

  it('should throw an error when token is not available', async () => {
    getToken.mockResolvedValue(undefined);

    // Execute test & Expect
    await expect(request({ url: mockUrl, method: mockMethod })).rejects.toThrow(
      'API Unauthorized error.',
    );
  });
});
