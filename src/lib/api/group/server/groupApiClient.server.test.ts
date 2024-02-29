import { request } from '@/lib/api/common/server';
import { getGroupList } from '@/lib/api/group/server';

jest.mock('@/lib/api/common/server/commonUtils.server', () => ({
  request: jest.fn(),
}));

const mockGroup = { groupId: 'a3kdifut-a520-c2cb-1be7-d90710691861', groupName: 'Shared-house' };

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

  describe('fetchGroupList', () => {
    it('successfully fetches group list', async () => {
      const mockRequest = setUpMockSuccessRequest({ groups: [mockGroup] });
      const expectedValue = [{ id: 'a3kdifut-a520-c2cb-1be7-d90710691861', name: 'Shared-house' }];

      const result = await getGroupList();

      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      setUpMockErrorRequest(new Error('Network error'));
      const result = getGroupList();
      await expect(result).rejects.toThrow('API response is invalid');
    });
  });
});
