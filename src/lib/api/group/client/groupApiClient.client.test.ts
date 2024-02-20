import { request } from '@/lib/api/common/client';
import {
  IPostCreateGroupApiResponse,
  IPostCreateGroupPayload,
  // Target functions to test
  postCreateGroup,
  putRenameGroup,
} from '@/lib/api/group/client';

import { Err, Ok } from 'result-ts-type';

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

  describe('postCreateGroup', () => {
    // Arrange mock data
    const mockPayload: IPostCreateGroupPayload = { groupName: 'Shared-house' };

    it('successfully creates a group', async () => {
      // mock response,request and expected value
      const mockResponse: IPostCreateGroupApiResponse = {
        groupId: 'a3kdifut-a520-c2cb-1be7-d90710691861',
      };
      const mockRequest = setUpMockSuccessRequest(mockResponse);
      const expectedValue = Ok(mockResponse);

      // Act
      const result = await postCreateGroup(mockPayload);

      // Assert
      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      // Arrange mock error and request
      const mockError = new Error('API error');
      setUpMockErrorRequest(mockError);

      // Act
      const result = await postCreateGroup(mockPayload);

      // Assert
      expect(result).toEqual(Err(mockError.message));
    });
  });

  describe('putRenameGroup', () => {
    // Arrange mock data
    const mockGroupId = 'a3kdifut-a520-c2cb-1be7-d90710691861';
    const mockPayload = { groupName: 'Shared-house' };

    it('successfully renames a group', async () => {
      // mock response,request and expected value
      const mockRequest = setUpMockSuccessRequest({});
      const expectedValue = Ok(undefined);

      // Act
      const result = await putRenameGroup(mockGroupId, mockPayload);

      // Assert
      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      // Arrange mock error and request
      const mockError = new Error('API error');
      setUpMockErrorRequest(mockError);

      // Act
      const result = await putRenameGroup(mockGroupId, mockPayload);

      // Assert
      expect(result).toEqual(Err(mockError.message));
    });
  });
});
