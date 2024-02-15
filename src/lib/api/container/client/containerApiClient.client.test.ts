// src/lib/api/container/client/containerApiClient.test.ts
import { request } from '@/lib/api/common/client';

import { Err, Ok } from 'result-ts-type';

import { postFood, putFood } from './containerApiClient.client';

jest.mock('@/lib/api/common/client', () => ({
  request: jest.fn(),
}));

describe('containerApiClient', () => {
  const mockContainerId = 'container1';
  const mockFoodId = 'food1';
  const mockFoodData = {
    name: 'Apple',
    quantity: 1,
    unit: 'kg',
    expiry: new Date(),
    category: 'Fruits',
  };

  beforeEach(() => {
    (request as jest.Mock).mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('postFood function', () => {
    it('should return Ok result with foodId on success', async () => {
      const mockResponse = { foodId: mockFoodId };
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await postFood(mockContainerId, mockFoodData);

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
      const mockError = new Error('API error');
      (request as jest.Mock).mockRejectedValue(mockError);

      const result = await postFood(mockContainerId, mockFoodData);

      expect(result).toEqual(Err(mockError.message));
    });
  });

  describe('putFood function', () => {
    it('should return Ok result on success', async () => {
      (request as jest.Mock).mockResolvedValue({});

      const result = await putFood(mockContainerId, mockFoodId, mockFoodData);

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
      const mockError = new Error('API error');
      (request as jest.Mock).mockRejectedValue(mockError);

      const result = await putFood(mockContainerId, mockFoodId, mockFoodData);

      expect(result).toEqual(Err(mockError.message));
    });
  });
});
