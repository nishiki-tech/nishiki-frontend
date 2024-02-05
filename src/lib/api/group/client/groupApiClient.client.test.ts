import { request } from '@/lib/api/common/client';
import { createGroup } from '@/lib/api/group/client';

import { ICreateGroupApiResponse, ICreateGroupParams } from './groupApiClient.client';

jest.mock('@/lib/api/common/client/commonUtils.client', () => ({
  request: jest.fn(),
}));

/**
 * Create mock data for request method
 * @template T
 * @param {T} mockData
 * @return {jest.MockedFunction<typeof request>} mocked request method
 */
const setUpMockSuccessRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockResolvedValue(mockData);
};

/**
 * Create mock error data for request method
 * @template T
 * @param {T} mockData
 * @return {jest.MockedFunction<typeof request>} mocked request method
 */
const setUpMockErrorRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockRejectedValue(mockData);
};

describe('API Function Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // createGroup method tests
  describe('createGroup', () => {
    // mock params and response
    const mockCreateGroupParams: ICreateGroupParams = { groupName: 'Shared-house' };
    const mockCreateGroupResponse: ICreateGroupApiResponse = {
      groupId: 'a3kdifut-a520-c2cb-1be7-d90710691861',
    };
    it('successfully creates a group', async () => {
      const mockRequest = setUpMockSuccessRequest(mockCreateGroupResponse);
      const expectedValue = mockCreateGroupResponse.groupId;

      const result = await createGroup(mockCreateGroupParams);

      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      setUpMockErrorRequest(new Error('Network error'));
      const result = createGroup(mockCreateGroupParams);
      expect(result).rejects.toThrow('API response is invalid');
    });
  });
});
