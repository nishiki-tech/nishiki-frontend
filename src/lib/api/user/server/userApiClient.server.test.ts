import { request } from '@/lib/api/common/server';
import { fetchUserList, getUserById } from '@/lib/api/user/server';

import { IGetUserByIdResponse, ITemporaryGetUserByIdResponse } from './userApiClient.server';

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

      const mockResponse: IGetUserByIdResponse = { id: mockUserId, name: mockUserName };
      /**
       * The API response object type is  currently different from how it's defined in the web API document.
       * We named current response object as {@link ITemporaryGetUserByIdResponse.}
       * Once the API is fixed, we need to update the response object type to {@link IGetUserByIdResponse}
       * This issue is mentioned in the issue {@link https://github.com/nishiki-tech/nishiki-frontend/issues/255}
       */
      const mockTemporallyResponse: ITemporaryGetUserByIdResponse = {
        status: 'success',
        statusCode: 200,
        body: { userId: mockUserId, username: mockUserName },
      };
      /**
       * The API currently returns a JSON string instead of object
       * This issue is mentioned in the issue {@link https://github.com/nishiki-tech/nishiki-frontend/issues/255}
       * Thus,for now, we need to stringify the response here to mock request function.
       */
      const mockRequestFunctionResponse = JSON.stringify(mockTemporallyResponse);
      (request as jest.Mock).mockResolvedValue(mockRequestFunctionResponse);

      // Act
      const result = await getUserById(mockUserId);

      // Assert
      /**
       * The API client is suppose to modify the {@link ITemporaryGetUserByIdResponse} to {@link IGetUserByIdResponse} and return it .
       * This modification will not be needed once the API is fixed.
       * */
      expect(result.unwrap()).toEqual(mockResponse);
      expect(request).toHaveBeenCalledWith({
        url: expect.stringContaining('/users/' + mockUserId),
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
      expect(result.unwrapError()).toEqual(mockError.message);
    });
  });
});
