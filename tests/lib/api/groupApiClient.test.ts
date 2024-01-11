import { fetchGroupList } from '@/lib/api';
import * as commonUtils from '@/lib/api/commonUtils';

jest.mock('@/lib/api/commonUtils', () => ({
  request: jest.fn(),
}));

const mockGroup = { groupId: 'a3kdifut-a520-c2cb-1be7-d90710691861', groupName: 'Shared-house' };

const setUpMockRequest = <T>(mockData: T) => {
  return jest.spyOn(commonUtils, 'request').mockResolvedValue(mockData);
};

describe('API Function Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchGroupList', () => {
    it('successfully fetches group list', async () => {
      const mockRequest = setUpMockRequest({ groups: [mockGroup] });
      const expectedValue = [{ id: 'a3kdifut-a520-c2cb-1be7-d90710691861', name: 'Shared-house' }];

      const result = await fetchGroupList();

      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      jest.spyOn(commonUtils, 'request').mockRejectedValue(new Error('Network error'));
      const result = fetchGroupList();
      await expect(result).rejects.toThrow('API response is invalid');
    });
  });
});
