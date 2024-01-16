import { fetchUserList } from '@/lib/api';
import { request } from '@/lib/api/commonUtils';

jest.mock('@/lib/api/commonUtils', () => ({
  request: jest.fn(),
}));

const mockUser = { userId: '679adc58-b03a-4fb6-993b-c72404087375', userName: 'John' };

const setUpMockRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockResolvedValue(mockData);
};

describe('API Function Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchUserList', () => {
    const mockUserId = '679adc58-b03a-4fb6-993b-c72404087375';
    it('successfully fetches user list for a group', async () => {
      const mockRequest = setUpMockRequest({ users: [mockUser] });
      const expectedValue = [{ ...mockUser }];

      const result = await fetchUserList(mockUserId);

      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      (request as jest.MockedFunction<typeof request>).mockRejectedValue(
        new Error('Network error'),
      );
      const result = fetchUserList(mockUserId);
      await expect(result).rejects.toThrow('API response is invalid');
    });
  });
});
