import { fetchAllContainerList, fetchContainerList } from '@/lib/api';
import * as commonUtils from '@/lib/api/commonUtils';

jest.mock('@/lib/api/commonUtils', () => ({
  request: jest.fn(),
}));

const mockContainer = {
  id: '1',
  name: 'Container 1',
  group: { groupId: '123', groupName: 'Group 123' },
  foods: [
    {
      id: '11111111-58b7-4c3d-9548-fc0a4d3b3ef4',
      name: 'arugula',
      quantity: 500,
      category: 'vegetables',
      unit: 'g',
      expiry: '2023-12-10T00:00:00.000Z',
      createdAt: '2023-12-01T00:00:00.000Z',
    },
  ],
};

const setUpMockRequest = <T>(mockData: T) => {
  return jest.spyOn(commonUtils, 'request').mockResolvedValue(mockData);
};

describe('API Function Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchContainerList', () => {
    const mockGroupId = '123';
    it('successfully fetches container list for a group', async () => {
      const mockRequest = setUpMockRequest({ containers: [mockContainer] });
      const expectedValue = [
        {
          ...mockContainer,
          group: { id: '123', name: 'Group 123' },
        },
      ];

      const result = await fetchContainerList(mockGroupId);

      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      jest.spyOn(commonUtils, 'request').mockRejectedValue(new Error('Network error'));
      const result = fetchContainerList(mockGroupId);
      await expect(result).rejects.toThrow('API response is invalid');
    });
  });

  describe('fetchAllContainerList', () => {
    it('successfully fetches all containers', async () => {
      const mockRequest = setUpMockRequest({ containers: [mockContainer] });
      const expectedValue = [
        {
          ...mockContainer,
          group: { id: '123', name: 'Group 123' },
        },
      ];

      const result = await fetchAllContainerList();

      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      jest.spyOn(commonUtils, 'request').mockRejectedValue(new Error('Network error'));
      const result = fetchAllContainerList();
      await expect(result).rejects.toThrow('API response is invalid');
    });
  });
});
