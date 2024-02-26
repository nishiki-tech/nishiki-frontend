// src/features/foods/lib/actions.test.ts
import { deleteFood, postFood, putFood } from '@/lib/api/container/client';

import { Err, Ok } from 'result-ts-type';

// Target functions to test
import { createFood, removeFood, updateFood } from './actions';

// Mock functions from containerApiClient.client
jest.mock('@/lib/api/container/client', () => ({
  postFood: jest.fn(),
  putFood: jest.fn(),
  deleteFood: jest.fn(),
}));

// Clear mocks after each test
afterEach(() => {
  jest.clearAllMocks();
});

describe('Food actions', () => {
  const mockInputs = {
    name: 'Test Food',
    group: '503d5c82-b112-475b-b64d-8f194c3bbbdd',
    container: 'f0dec4a1-2425-4cb0-a8ec-6bd5f630a698',
    quantity: '2',
    unit: 'kg',
    expiry: new Date('2024-01-01'),
    category: 'Vegetables',
  };

  describe('createFood', () => {
    it('should successfully create food if validation passes', async () => {
      /* Arrange */
      (postFood as jest.Mock).mockResolvedValue(Ok({ foodId: 'newFoodId' }));

      /* Act */
      const result = await createFood(mockInputs);

      /* Assert */
      expect(result).toEqual(Ok(undefined));
      expect(postFood).toHaveBeenCalled();
    });

    it('should return Err if validation fails', async () => {
      /* Arrange */
      const invalidInputs = { ...mockInputs, name: '' }; // Invalidate the name to trigger validation failure

      /* Act */
      const result = await createFood(invalidInputs);

      /* Assert */
      expect(result).toEqual(Err('Validation failed'));
      expect(postFood).not.toHaveBeenCalled();
    });

    it('should return Err if API request fails', async () => {
      /* Arrange */
      const mockErrorMessage = 'API error';
      (postFood as jest.Mock).mockResolvedValue(Err(mockErrorMessage));

      /* Act */
      const result = await createFood(mockInputs);

      /* Assert */
      expect(result).toEqual(Err(mockErrorMessage));
    });
  });

  describe('updateFood', () => {
    const updateInputs = {
      ...mockInputs,
      id: 'c58cd729-112c-499e-bbe5-fb09dd7c0a0a',
    };

    it('should successfully update food if validation passes', async () => {
      /* Arrange */
      (putFood as jest.Mock).mockResolvedValue(Ok(undefined));

      /* Act */
      const result = await updateFood(updateInputs);

      /* Assert */
      expect(result).toEqual(Ok(undefined));
      expect(putFood).toHaveBeenCalled();
    });

    it('should return Err if validation fails', async () => {
      /* Arrange */
      const invalidInputs = { ...updateInputs, name: '' }; // Invalidate the name

      /* Act */
      const result = await updateFood(invalidInputs);

      /* Assert */
      expect(result).toEqual(Err('Validation failed'));
      expect(putFood).not.toHaveBeenCalled();
    });

    it('should return Err if API request fails', async () => {
      /* Arrange */
      const mockErrorMessage = 'API error';
      (putFood as jest.Mock).mockResolvedValue(Err(mockErrorMessage));

      /* Act */
      const result = await updateFood(updateInputs);

      /* Assert */
      expect(result).toEqual(Err(mockErrorMessage));
    });
  });

  describe('removeFood', () => {
    const mockContainerId = '9479c68f-f7d2-4dd4-bb6f-07ac3b5c47bf';
    const mockFoodId = 'bd5ec07e-d79e-49c8-86ad-b728dcda778d';

    it('should successfully remove food', async () => {
      /* Arrange */
      (deleteFood as jest.Mock).mockResolvedValue(Ok(undefined));

      /* Act */
      const result = await removeFood(mockContainerId, mockFoodId);

      /* Assert */
      expect(result).toEqual(Ok(undefined));
      expect(deleteFood).toHaveBeenCalled();
    });

    it('should return Err if validation fails', async () => {
      /* Arrange */
      const invalidContainerId = 'invalid-container-id';
      const invalidFoodId = 'invalid-food-id';

      /* Act */
      const result = await removeFood(invalidContainerId, invalidFoodId);

      /* Assert */
      expect(result).toEqual(Err('Validation failed'));
      expect(putFood).not.toHaveBeenCalled();
    });

    it('should return Err if API request fails', async () => {
      /* Arrange */
      const mockErrorMessage = 'API error';
      (deleteFood as jest.Mock).mockResolvedValue(Err(mockErrorMessage));

      /* Act */
      const result = await removeFood(mockContainerId, mockFoodId);

      /* Assert */
      expect(result).toEqual(Err(mockErrorMessage));
    });
  });
});
