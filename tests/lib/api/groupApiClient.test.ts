import * as commonUtils from '@/lib/api/commonUtils';
import {
  fetchAllContainerList,
  fetchContainerList,
  fetchGroupList,
} from '@/lib/api/groupApiClient'; // Replace with actual file name

// Mocks
jest.mock('@/lib/api/commonUtils', () => ({
  request: jest.fn(),
}));

describe('API Function Tests', () => {
  // Mocking the backend domain
  // process.env.NEXT_PUBLIC_BACKEND_API_DOMAIN = 'https://mockapi.com';

  // Testing fetchGroupList
  describe('fetchGroupList', () => {
    it('successfully fetches group list', async () => {
      // Create Mock value
      const mockObject = {
        groups: [{ groupId: '1', groupName: 'Group 1' }],
      };
      const mockRequest = jest.spyOn(commonUtils, 'request').mockResolvedValue(mockObject);
      // Execute
      const result = await fetchGroupList();
      const expectedValue = [{ id: '1', name: 'Group 1' }];
      // Validate
      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      jest.spyOn(commonUtils, 'request').mockResolvedValue(new Error('Network error'));
      expect(fetchGroupList()).rejects.toThrow('API response is invalid');
    });
  });

  // Testing fetchContainerList
  describe('fetchContainerList', () => {
    it('successfully fetches container list for a group', async () => {
      const mockGroupId = '123';
      const mockObject = {
        containers: [
          {
            id: '1',
            name: 'Container 1',
            group: { groupId: '123', groupName: 'Group 123' },
            foods: [],
          },
        ],
      };
      const mockRequest = jest.spyOn(commonUtils, 'request').mockResolvedValue(mockObject);

      const result = await fetchContainerList(mockGroupId);
      const expectedValue = [
        {
          id: '1',
          name: 'Container 1',
          group: { id: '123', name: 'Group 123' },
          foods: [],
        },
      ];
      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });
  });

  // Testing fetchAllContainerList
  describe('fetchAllContainerList', () => {
    it('successfully fetches all containers', async () => {
      const mockObject = {
        containers: [
          {
            id: '1',
            name: 'Container 1',
            group: { groupId: '123', groupName: 'Group 123' },
            foods: [],
          },
        ],
      };
      const mockRequest = jest.spyOn(commonUtils, 'request').mockResolvedValue(mockObject);

      const result = await fetchAllContainerList();
      const expectedValue = [
        {
          id: '1',
          name: 'Container 1',
          group: { id: '123', name: 'Group 123' },
          foods: [],
        },
      ];
      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });
  });
});
