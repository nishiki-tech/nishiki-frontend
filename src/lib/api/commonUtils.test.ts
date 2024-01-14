import { getToken as originalGetToken } from '@/lib/api/authTokenFetcher';
const getToken = originalGetToken as jest.MockedFunction<typeof originalGetToken>;

// test target method
import { request } from '@/lib/api/commonUtils';

// Mock fetch and getToken
global.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;
jest.mock('@/lib/api/authTokenFetcher');

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

    const result = await request({ url: mockUrl, method: mockMethod });

    expect(result).toEqual(mockResponseData);
    expect(fetch).toHaveBeenCalledWith(mockUrl, expect.anything());
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
    const result = request({ url: mockUrl, method: mockMethod });
    await expect(result).rejects.toThrow('HTTP error. status: 500');
  });

  it('should throw an error when token is not available', async () => {
    getToken.mockResolvedValue(undefined);

    await expect(request({ url: mockUrl, method: mockMethod })).rejects.toThrow(
      'API Unauthorized error.',
    );
  });
});
