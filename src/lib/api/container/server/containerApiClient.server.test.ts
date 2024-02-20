import { request } from '@/lib/api/common/server';
import { fetchAllContainerList, fetchContainerList } from '@/lib/api/container/server';

jest.mock('@/lib/api/common/server/commonUtils.server', () => ({
  request: jest.fn(),
}));

const mockContainer = {
  id: '939a4c50-ee7b-4558-b8d5-371514e77bed',
  name: 'Shared-houses Fridge',
  group: { groupId: 'a3kdifut-a520-c2cb-1be7-d90710691861', groupName: 'Shared-house' },
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

/**
 * Create mock data for request method
 * @template T
 * @param mockData
 * @returns mocked request method
 */
const setUpMockSuccessRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockResolvedValue(mockData);
};

/**
 * Create mock error data for request method
 * @template T
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

  describe('fetchContainerList', () => {
    const mockGroupId = 'a3kdifut-a520-c2cb-1be7-d90710691861';
    it('successfully fetches container list for a group', async () => {
      const mockRequest = setUpMockSuccessRequest({ containers: [mockContainer] });
      const expectedValue = [
        {
          ...mockContainer,
          group: { id: 'a3kdifut-a520-c2cb-1be7-d90710691861', name: 'Shared-house' },
        },
      ];

      const result = await fetchContainerList(mockGroupId);

      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      setUpMockErrorRequest(new Error('Network error'));
      const result = fetchContainerList(mockGroupId);
      await expect(result).rejects.toThrow('API response is invalid');
    });
  });

  describe('fetchAllContainerList', () => {
    it('successfully fetches all containers', async () => {
      const mockRequest = setUpMockSuccessRequest({ containers: [mockContainer] });
      const expectedValue = [
        {
          ...mockContainer,
          group: { id: 'a3kdifut-a520-c2cb-1be7-d90710691861', name: 'Shared-house' },
        },
      ];

      const result = await fetchAllContainerList();

      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      setUpMockErrorRequest(new Error('Network error'));
      const result = fetchAllContainerList();
      await expect(result).rejects.toThrow('API response is invalid');
    });
  });
});
