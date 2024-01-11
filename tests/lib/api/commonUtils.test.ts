/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getToken } from '@/lib/api/authTokenFetcher';
import { request } from '@/lib/api/commonUtils';

// Mock fetch and getToken
global.fetch = jest.fn();
jest.mock('@/lib/api/authTokenFetcher', () => ({
  getToken: jest.fn(),
}));

describe('request function', () => {
  const mockUrl = 'https://example.com/api/test';
  const mockMethod = 'GET';
  const mockResponseData = { data: 'test' };
  const mockToken = { idToken: 'fake-token' };

  beforeEach(() => {
    fetch.mockClear();
    getToken.mockClear();
  });

  it('should make an API call and return data', async () => {
    getToken.mockResolvedValue(mockToken);
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponseData),
    });

    const result = await request({ url: mockUrl, method: mockMethod });

    expect(result).toEqual(mockResponseData);
    expect(fetch).toHaveBeenCalledWith(mockUrl, expect.anything());
  });

  it('should throw an error when the response is not ok', async () => {
    getToken.mockResolvedValue(mockToken);
    fetch.mockResolvedValue({
      ok: false,
      status: 404,
      json: () => Promise.resolve({}),
    });

    await expect(request({ url: mockUrl, method: mockMethod })).rejects.toThrow(
      'HTTP error. status: 404',
    );
  });

  it('should throw an error when token is not available', async () => {
    getToken.mockResolvedValue(null);

    await expect(request({ url: mockUrl, method: mockMethod })).rejects.toThrow(
      'API Unauthorized error.',
    );
  });
});
