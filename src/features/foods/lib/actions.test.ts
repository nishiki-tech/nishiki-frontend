// src/features/foods/lib/actions.test.ts
import { postFood, putFood } from '@/lib/api/container/client';

import { Err, Ok } from 'result-ts-type';

// Target functions to test
import { createFood, updateFood } from './actions';

// Mock functions from containerApiClient.client
jest.mock('@/lib/api/container/client', () => ({
  postFood: jest.fn(),
  putFood: jest.fn(),
}));

// Clear mocks after each test
afterEach(() => {
  jest.clearAllMocks();
});

describe('Food actions', () => {
  const mockInputs = {
    name: 'Test Food',
    group: 'Test Group',
    container: 'Test Container',
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
      id: 'existingFoodId',
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
});
