import { postCreateGroup, putRenameGroup } from '@/lib/api/group/client';

import { Err, Ok } from 'result-ts-type';

import { createGroup, renameGroup } from './actions';
import { CreateGroupInputs } from './schemas';

jest.mock('@/lib/api/group/client', () => ({
  postCreateGroup: jest.fn(),
  putRenameGroup: jest.fn(),
}));

// Clear mocks after each test
afterEach(() => {
  jest.clearAllMocks();
});

describe('Group actions', () => {
  describe('createGroup action', () => {
    // Arrange common mock data
    const mockInputs: CreateGroupInputs = {
      groupName: 'Test Group',
    };
    it('should create a group successfully', async () => {
      // Arrange
      (postCreateGroup as jest.Mock).mockResolvedValue(Ok({ groupId: 'newGroupId' }));

      // Act
      const result = await createGroup(mockInputs);

      // Assert
      expect(result).toEqual(Ok(undefined));
      expect(postCreateGroup).toHaveBeenCalled();
    });

    it('should return an error if validation fails', async () => {
      // Arrange
      const mockInvalidInputs: CreateGroupInputs = {
        groupName: '',
      };

      // Act
      const result = await createGroup(mockInvalidInputs);

      // Assert
      expect(result).toEqual(Err('Validation failed'));
    });

    it('should return an error if API request fails', async () => {
      // Arrange
      // Mock the API request to simulate failure
      (postCreateGroup as jest.Mock).mockResolvedValue(Err('API request failed'));

      // Act
      const result = await createGroup(mockInputs);

      // Assert
      expect(result).toEqual(Err('API request failed'));
    });
  });

  describe('renameGroup', () => {
    // Arrange common mock data
    const mockGroupId = 'a3kdifut-a520-c2cb-1be7-d90710691861';
    const mockInputs = {
      groupName: 'New Group Name',
    };

    it('should rename a group successfully', async () => {
      // Arrange
      (putRenameGroup as jest.Mock).mockResolvedValue(Ok(undefined));

      // Act
      const result = await renameGroup(mockGroupId, mockInputs);

      // Assert
      expect(result).toEqual(Ok(undefined));
      expect(putRenameGroup).toHaveBeenCalled();
    });

    it('should return an error if validation fails', async () => {
      // Arrange
      const mockInvalidInputs = {
        groupName: '',
      };

      // Act
      const result = await renameGroup(mockGroupId, mockInvalidInputs);

      // Assert
      expect(result).toEqual(Err('Validation failed'));
    });

    it('should return an error if API request fails', async () => {
      // Arrange
      // Mock the API request to simulate failure
      (putRenameGroup as jest.Mock).mockResolvedValue(Err('API request failed'));

      const result = await renameGroup(mockGroupId, mockInputs);

      expect(result).toEqual(Err('API request failed'));
    });
  });
});
