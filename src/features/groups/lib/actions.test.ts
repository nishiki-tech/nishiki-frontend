import {
  deleteContainer,
  postCreateContainer,
  putRenameContainer,
} from '@/lib/api/container/client';
import { deleteGroup, deleteMember, postCreateGroup, putRenameGroup } from '@/lib/api/group/client';

import { Err, Ok } from 'result-ts-type';

import {
  createContainer,
  createGroup,
  removeContainer,
  removeGroup,
  removeMember,
  renameContainer,
  renameGroup,
} from './actions';
import { CreateGroupInputs } from './schemas';

jest.mock('@/lib/api/group/client', () => ({
  postCreateGroup: jest.fn(),
  putRenameGroup: jest.fn(),
  deleteGroup: jest.fn(),
  deleteMember: jest.fn(),
}));

jest.mock('@/lib/api/container/client', () => ({
  postCreateContainer: jest.fn(),
  putRenameContainer: jest.fn(),
  deleteContainer: jest.fn(),
}));

// Clear mocks after each test
afterEach(() => {
  jest.clearAllMocks();
});

describe('Group actions', () => {
  describe('Groups', () => {
    describe('createGroup action', () => {
      // Arrange common mock data
      const mockInputs: CreateGroupInputs = {
        groupName: 'Test Group',
      };

      it('should create a group successfully', async () => {
        // Arrange
        const mockResponse = { groupId: 'newGroupId' };
        (postCreateGroup as jest.Mock).mockResolvedValue(Ok(mockResponse));

        // Act
        const result = await createGroup(mockInputs);

        // Assert
        expect(result.unwrap()).toEqual(undefined);
        expect(postCreateGroup).toHaveBeenCalled();
      });

      it('should return an error if validation fails', async () => {
        // Arrange
        const mockInvalidInputs: CreateGroupInputs = {
          groupName: '',
        };
        const mockErrorMessage = 'Validation failed';

        // Act
        const result = await createGroup(mockInvalidInputs);

        // Assert
        expect(result.unwrapError()).toEqual(mockErrorMessage);
        expect(postCreateGroup).not.toHaveBeenCalled();
      });

      it('should return an error if API request fails', async () => {
        // Arrange
        // Mock the API request to simulate failure
        const mockErrorMessage = 'API request failed';
        (postCreateGroup as jest.Mock).mockResolvedValue(Err(mockErrorMessage));

        // Act
        const result = await createGroup(mockInputs);

        // Assert
        expect(result.unwrapError()).toEqual(mockErrorMessage);
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
        expect(result.unwrap()).toEqual(undefined);
        expect(putRenameGroup).toHaveBeenCalled();
      });

      it('should return an error if validation fails', async () => {
        // Arrange
        const mockInvalidInputs = {
          groupName: '',
        };
        const mockErrorMessage = 'Validation failed';

        // Act
        const result = await renameGroup(mockGroupId, mockInvalidInputs);

        // Assert
        expect(result.unwrapError()).toEqual(mockErrorMessage);
        expect(putRenameGroup).not.toHaveBeenCalled();
      });

      it('should return an error if API request fails', async () => {
        // Arrange
        // Mock the API request to simulate failure
        const mockErrorMessage = 'API request failed';
        (putRenameGroup as jest.Mock).mockResolvedValue(Err(mockErrorMessage));

        const result = await renameGroup(mockGroupId, mockInputs);

        expect(result.unwrapError()).toEqual(mockErrorMessage);
      });
    });

    describe('removeGroup', () => {
      const mockGroupId = 'e8cf327b-944a-402f-ba18-c2c4e442d675';

      it('should successfully remove group', async () => {
        /* Arrange */
        (deleteGroup as jest.Mock).mockResolvedValue(Ok(undefined));

        /* Act */
        const result = await removeGroup(mockGroupId);

        /* Assert */
        expect(result.unwrap()).toBe(undefined);
        expect(deleteGroup).toHaveBeenCalled();
      });

      it('should return Err if validation fails', async () => {
        /* Arrange */
        const invalidGroupId = '';

        /* Act */
        const result = await removeGroup(invalidGroupId);

        /* Assert */
        expect(result.unwrapError()).toBe('Validation failed');
      });

      it('should return Err if API request fails', async () => {
        /* Arrange */
        const mockErrorMessage = 'API error';
        (deleteGroup as jest.Mock).mockResolvedValue(Err(mockErrorMessage));

        /* Act */
        const result = await removeGroup(mockGroupId);

        /* Assert */
        expect(result.unwrapError()).toBe(mockErrorMessage);
      });
    });

    //removeMember function tests
    describe('removeMember', () => {
      const mockGroupId = 'e8cf327b-944a-402f-ba18-c2c4e442d675';
      const mockUserId = '05d768f5-c290-4187-b539-b481a8cb5af1';
      it('should successfully remove member', async () => {
        /* Arrange */
        (deleteMember as jest.Mock).mockResolvedValue(Ok(undefined));

        /* Act */
        const result = await removeMember(mockGroupId, mockUserId);

        /* Assert */
        expect(result.unwrap()).toBe(undefined);
        expect(deleteMember).toHaveBeenCalled();
      });

      it('should return Err if validation fails', async () => {
        /* Arrange */
        const invalidGroupId = 'invalid-group-id';
        const invalidUserId = 'invalid-user-id';

        /* Act */
        const result = await removeMember(invalidGroupId, invalidUserId);

        /* Assert */
        expect(result.unwrapError()).toBe('Validation failed');
      });

      it('should return Err if API request fails', async () => {
        /* Arrange */
        const mockErrorMessage = 'API error';
        (deleteMember as jest.Mock).mockResolvedValue(Err(mockErrorMessage));

        /* Act */
        const result = await removeMember(mockGroupId, mockUserId);

        /* Assert */
        expect(result.unwrapError()).toBe(mockErrorMessage);
      });
    });
  });
  describe('Containers', () => {
    describe('createContainer', () => {
      /* Arrange common mock data */
      const mockRequestGroupId = { name: '82597aad-0d1b-4672-8b9a-fd3764cb9928' };
      const mockRequestName = 'newContainer';

      it('should create a container successfully', async () => {
        /* Arrange */
        const mockResponse = { containerId: 'container1' };
        (postCreateContainer as jest.Mock).mockResolvedValue(Ok(mockResponse));

        /* Act */
        const result = await createContainer(mockRequestGroupId, mockRequestName);

        /* Assert */
        expect(result.unwrap()).toEqual(undefined);
        expect(postCreateContainer).toHaveBeenCalled();
      });

      it('should return an error if validation fails', async () => {
        /* Arrange */
        const mockInvalidRequestName = { name: '' };
        const mockInvalidGroupId = '';

        /* Act */
        const result = await createContainer(mockInvalidRequestName, mockInvalidGroupId);

        /* Assert */
        expect(result.unwrapError()).toEqual('Validation failed');
      });

      it('should return an error if API request fails', async () => {
        /* Arrange */
        const mockErrorMessage = 'API error';
        (postCreateContainer as jest.Mock).mockResolvedValue(Err(mockErrorMessage));

        /* Act */
        const result = await createContainer(mockRequestGroupId, mockRequestName);
        /* Assert */
        expect(result.unwrapError()).toBe(mockErrorMessage);
      });
    });

    describe('renameContainer', () => {
      /* Arrange common mock data */
      const mockContainerId = 'myContainerId';
      const mockInputs = {
        containerName: 'updateContainerName',
      };

      it('should rename container successfully', async () => {
        /* Arrange */
        (putRenameContainer as jest.Mock).mockResolvedValue(Ok(undefined));

        /* Act */
        const result = await renameContainer(mockContainerId, mockInputs);

        /* Assert */
        expect(result.unwrap()).toBe(undefined);
        expect(putRenameContainer).toHaveBeenCalled();
      });

      it('should return an error if validation fails', async () => {
        /* Arrange */
        const mockInvalidInputs = {
          containerName: '',
        };

        /* Act */
        const result = await renameContainer(mockContainerId, mockInvalidInputs);

        /* Assert */
        expect(result.unwrapError()).toBe('Validation failed');
      });

      it('should return an error if API request fails', async () => {
        /* Arrange */
        (putRenameContainer as jest.Mock).mockResolvedValue(Err('API request failed'));

        /* Act */
        const result = await renameContainer(mockContainerId, mockInputs);

        /* Assert */
        expect(result.unwrapError()).toBe('API request failed');
      });
    });
    describe('removeContainer', () => {
      const mockContainerId = '0bfe2c43-865b-4d8a-9ad8-9a0bf54f5e2f';

      it('should successfully remove container ', async () => {
        /* Arrange */
        (deleteContainer as jest.Mock).mockResolvedValue(Ok(undefined));

        /* Act */
        const result = await removeContainer(mockContainerId);
        /* Assert */
        expect(result.unwrap()).toBe(undefined);
        expect(deleteContainer).toHaveBeenCalled();
      });
      it('should return Err if validation fails', async () => {
        /* Arrange */
        const invalidContainerId = '';
        /* Act */
        const result = removeContainer(invalidContainerId);
        /* Assert */
        expect((await result).unwrapError()).toBe('Validation failed');
      });
      it('should successful with OK response ', async () => {
        /* Arrange */
        const mockErrorMessage = 'API error';
        (deleteContainer as jest.Mock).mockResolvedValue(Err(mockErrorMessage));

        /* Act */
        const result = await removeContainer(mockContainerId);

        /* Assert */
        expect(result.unwrapError()).toBe(mockErrorMessage);
      });
    });
  });
});
