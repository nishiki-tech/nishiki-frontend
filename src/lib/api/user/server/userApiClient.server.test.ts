import { request } from '@/lib/api/common/server';
import { fetchUserList, getUserById, IGetUserByIdResponse } from '@/lib/api/user/server';

jest.mock('@/lib/api/common/server/commonUtils.server', () => ({
  request: jest.fn(),
}));

const mockUser = { userId: '679adc58-b03a-4fb6-993b-c72404087375', userName: 'John' };

/**
 * Create mock data for request method
 * @param mockData
 * @returns mocked request method
 */
const setUpMockSuccessRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockResolvedValue(mockData);
};

/**
 * Create mock error data for request method
 * @param mockData
 * @returns mocked request method
 */
const setUpMockErrorRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockRejectedValue(mockData);
};

describe('API Function Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchUserList', () => {
    const mockUserId = '679adc58-b03a-4fb6-993b-c72404087375';
    it('successfully fetches user list for a group', async () => {
      const mockRequest = setUpMockSuccessRequest({ users: [mockUser] });
      const expectedValue = [{ ...mockUser }];

      const result = await fetchUserList(mockUserId);

      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      setUpMockErrorRequest(new Error('Network error'));
      const result = fetchUserList(mockUserId);
      await expect(result).rejects.toThrow('API response is invalid');
    });
  });

  describe('getUserById', () => {
    const mockUserId = '679adc58-b03a-4fb6-993b-c72404087375';
    const mockUserName = 'John';

    it('successfully fetches user by id', async () => {
      // Arrange

      const mockResponse: IGetUserByIdResponse = { userId: mockUserId, name: mockUserName };

      (request as jest.Mock).mockResolvedValue(mockResponse);

      // Act
      const result = await getUserById(mockUserId);

      // Assert
      expect(result.ok).toBeTruthy();
      expect(result.unwrap()).toEqual(mockResponse);
      expect(request).toHaveBeenCalledWith({
        url: expect.stringContaining(`/users/${mockUserId}`),
        method: 'GET',
      });
    });

    it('should return Err result if API request fails', async () => {
      // Arrange
      const mockError = new Error('API error');
      (request as jest.Mock).mockRejectedValue(mockError);

      // Act
      const result = await getUserById(mockUserId);

      // Assert
      expect(result.err).toBeTruthy();
      expect(result.unwrapError()).toEqual(mockError.message);
    });
  });
});
