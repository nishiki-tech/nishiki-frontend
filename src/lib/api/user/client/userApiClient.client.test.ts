import { request } from '@/lib/api/common/client';
import { deleteUser, putUpdateUser } from '@/lib/api/user/client';

jest.mock('@/lib/api/common/client', () => ({
  request: jest.fn(),
}));

/**
 * Create mock data for request function
 * @param mockData
 * @returns mocked request function
 */
const setUpMockSuccessRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockResolvedValue(mockData);
};

/**
 * Create mock error data for request function
 * @param mockData
 * @returns mocked request function
 */
const setUpMockErrorRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockRejectedValue(mockData);
};

describe('API Function Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('putUpdateUser', () => {
    // Arrange mock data
    const mockUserId = 'a3kdifut-a520-c2cb-1be7-d90710691861';
    const mockRequestBody = { name: 'New name' };

    it('successfully update user data', async () => {
      // mock response,request and expected value
      const mockRequest = setUpMockSuccessRequest({});

      // Act
      const result = await putUpdateUser(mockUserId, mockRequestBody);

      // Assert
      expect(result.ok).toBeTruthy();
      expect(result.unwrap()).toEqual(undefined);
      expect(mockRequest).toHaveBeenCalledWith({
        url: expect.stringContaining(`/users/${mockUserId}`),
        method: 'PUT',
        options: {
          body: JSON.stringify(mockRequestBody),
        },
      });
    });

    it('throws an error on API failure', async () => {
      // Arrange mock error and request
      const mockError = new Error('API error');
      setUpMockErrorRequest(mockError);

      // Act
      const result = await putUpdateUser(mockUserId, mockRequestBody);

      // Assert
      expect(result.err).toBeTruthy();
      expect(result.unwrapError()).toEqual(mockError.message);
    });
  });

  describe('deleteUser', () => {
    // Arrange mock data
    const mockUserId = 'a3kdifut-a520-c2cb-1be7-d90710691861';

    it('successfully delete user', async () => {
      // mock response,request and expected value
      const mockRequest = setUpMockSuccessRequest({});

      // Act
      const result = await deleteUser(mockUserId);

      // Assert
      expect(result.ok).toBeTruthy();
      expect(result.unwrap()).toEqual(undefined);
      expect(mockRequest).toHaveBeenCalledWith({
        url: expect.stringContaining(`/users/${mockUserId}`),
        method: 'DELETE',
      });
    });

    it('throws an error on API failure', async () => {
      // Arrange mock error and request
      const mockError = new Error('API error');
      setUpMockErrorRequest(mockError);

      // Act
      const result = await deleteUser(mockUserId);

      // Assert
      expect(result.err).toBeTruthy();
      expect(result.unwrapError()).toEqual(mockError.message);
    });
  });
});
