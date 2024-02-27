import { request } from '@/lib/api/common/client';

import { Err, Ok } from 'result-ts-type';

// Target functions to test
import { deleteFood, postContainer, postFood, putFood } from './containerApiClient.client';

// Mock request function
jest.mock('@/lib/api/common/client', () => ({
  request: jest.fn(),
}));

describe('containerApiClient', () => {
  // Arrange mock data
  const mockContainerId = 'container1';
  const mockFoodId = 'food1';
  const mockFoodData = {
    name: 'Apple',
    quantity: 1,
    unit: 'kg',
    expiry: new Date(),
    category: 'Fruits',
  };

  // Clear mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('postFood function', () => {
    it('should return Ok result with foodId on success', async () => {
      /* Arrange */
      const mockResponse = { foodId: mockFoodId };
      (request as jest.Mock).mockResolvedValue(mockResponse);

      /* Act */
      const result = await postFood(mockContainerId, mockFoodData);

      /* Assert */
      expect(result).toEqual(Ok({ foodId: mockFoodId }));
      expect(request).toHaveBeenCalledWith({
        url: expect.stringContaining(`/containers/${mockContainerId}/foods`),
        method: 'POST',
        options: {
          body: JSON.stringify(mockFoodData),
        },
      });
    });

    it('should return Err result if API request fails', async () => {
      /* Arrange */
      const mockError = new Error('API error');
      (request as jest.Mock).mockRejectedValue(mockError);

      /* Act */
      const result = await postFood(mockContainerId, mockFoodData);

      /* Assert */
      expect(result).toEqual(Err(mockError.message));
    });
  });

  describe('putFood function', () => {
    it('should return Ok result on success', async () => {
      /* Arrange */
      (request as jest.Mock).mockResolvedValue({});

      /* Act */
      const result = await putFood(mockContainerId, mockFoodId, mockFoodData);

      /* Assert */
      expect(result).toEqual(Ok(undefined));
      expect(request).toHaveBeenCalledWith({
        url: expect.stringContaining(`/containers/${mockContainerId}/foods/${mockFoodId}`),
        method: 'PUT',
        options: {
          body: JSON.stringify(mockFoodData),
        },
      });
    });

    it('should return Err result if API request fails', async () => {
      /* Arrange */
      const mockError = new Error('API error');
      (request as jest.Mock).mockRejectedValue(mockError);

      /* Act */
      const result = await putFood(mockContainerId, mockFoodId, mockFoodData);

      /* Assert */
      expect(result).toEqual(Err(mockError.message));
    });
  });

  describe('deleteFood function', () => {
    it('should return Ok result on success', async () => {
      /* Arrange */
      (request as jest.Mock).mockResolvedValue({});

      /* Act */
      const result = await deleteFood(mockContainerId, mockFoodId);

      /* Assert */
      expect(result).toEqual(Ok(undefined));
      expect(request).toHaveBeenCalledWith({
        url: expect.stringContaining(`/containers/${mockContainerId}/foods/${mockFoodId}`),
        method: 'DELETE',
      });
    });

    it('should return Err result if API request fails', async () => {
      /* Arrange */
      const mockError = new Error('API error');
      (request as jest.Mock).mockRejectedValue(mockError);

      /* Act */
      const result = await deleteFood(mockContainerId, mockFoodId);

      /* Assert */
      expect(result).toEqual(Err(mockError.message));
    });
  });

  //test for creating new container function
  describe('postContainer', () => {
    /* Arrange common mock data */
    const mockRequestBody = { groupId: 'groupId', name: 'newContainer' };

    it('should return OK result with new container ID', async () => {
      /* Arrange */
      const mockResponse = { containerId: mockContainerId };
      (request as jest.Mock).mockResolvedValue(mockResponse);

      /* Act */
      const result = await postContainer(mockRequestBody);

      /* Assert*/
      expect(result.unwrap()).toEqual(mockResponse);
      expect(request).toHaveBeenCalledWith({
        url: expect.stringContaining(`/containers`),
        method: 'POST',
        options: {
          body: JSON.stringify(mockRequestBody),
        },
      });
    });

    it('should return error result if API request fails', async () => {
      /* Arrange */
      const mockError = new Error('API error');
      (request as jest.Mock).mockRejectedValue(mockError);

      /* Act */
      const result = await postContainer(mockRequestBody);

      /* Assert */
      expect(result.unwrapError()).toEqual(mockError.message);
    });
  });
});
