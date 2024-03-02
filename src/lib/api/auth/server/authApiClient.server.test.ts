import { request } from '@/lib/api/common/server';

import { getCurrentUserId, IGetCurrentUserResponse } from './authApiClient.server';

jest.mock('../../common/server', () => ({
  request: jest.fn(),
}));

describe('authApiClient', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getCurrentUserId', () => {
    it('should return Ok result with userId on success', async () => {
      // Arrange
      const mockUserId = 'user1';
      const mockResponse: IGetCurrentUserResponse = { userId: mockUserId };
      /**
       * The API currently returns a JSON string instead of object
       * This issue is mentioned in the issue {@link https://github.com/nishiki-tech/nishiki-frontend/issues/255}
       * Thus,for now, we need to stringify the response here to mock request function.
       */
      const mockRequestFunctionResponse = JSON.stringify(mockResponse);
      (request as jest.Mock).mockResolvedValue(mockRequestFunctionResponse);

      // Act
      const result = await getCurrentUserId();

      // Assert
      expect(result.unwrap()).toEqual(mockResponse);
      expect(request).toHaveBeenCalledWith({
        url: expect.stringContaining('/auth/me'),
        method: 'GET',
      });
    });

    it('should return Err result if API request fails', async () => {
      // Arrange
      const mockError = new Error('API error');
      (request as jest.Mock).mockRejectedValue(mockError);

      // Act
      const result = await getCurrentUserId();

      // Assert
      expect(result.unwrapError()).toEqual(mockError.message);
    });
  });
});
