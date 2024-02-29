import { request } from '@/lib/api/common/client';
import {
  deleteGroup,
  deleteMember,
  IPostCreateGroupApiResponse,
  IPostCreateGroupPayload,
  // Target functions to test
  postCreateGroup,
  putGenerateInvitationLinkHash,
  putRenameGroup,
} from '@/lib/api/group/client';

jest.mock('@/lib/api/common/client', () => ({
  request: jest.fn(),
}));

/**
 * Create mock data for request function
 * @param mockData
 * @returns mocked request function
 */
const setUpMockSuccessRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockResolvedValue(mockData);
};

/**
 * Create mock error data for request function
 * @param mockData
 * @returns mocked request function
 */
const setUpMockErrorRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockRejectedValue(mockData);
};

describe('API Function Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('postCreateGroup', () => {
    // Arrange mock data
    const mockRequestBody: IPostCreateGroupPayload = { groupName: 'Shared-house' };

    it('successfully creates a group', async () => {
      // mock response,request and expected value
      const mockResponse: IPostCreateGroupApiResponse = {
        groupId: 'a3kdifut-a520-c2cb-1be7-d90710691861',
      };
      const mockRequest = setUpMockSuccessRequest(mockResponse);

      // Act
      const result = await postCreateGroup(mockRequestBody);

      // Assert
      expect(result.unwrap()).toEqual(mockResponse);
      expect(mockRequest).toHaveBeenCalledWith({
        url: expect.stringContaining('/groups'),
        method: 'POST',
        options: {
          body: JSON.stringify(mockRequestBody),
        },
      });
    });

    it('throws an error on API failure', async () => {
      // Arrange mock error and request
      const mockError = new Error('API error');
      setUpMockErrorRequest(mockError);

      // Act
      const result = await postCreateGroup(mockRequestBody);

      // Assert
      expect(result.unwrapError()).toEqual(mockError.message);
    });
  });

  describe('putRenameGroup', () => {
    // Arrange mock data
    const mockGroupId = 'a3kdifut-a520-c2cb-1be7-d90710691861';
    const mockRequestBody = { groupName: 'Shared-house' };

    it('successfully renames a group', async () => {
      // mock response,request and expected value
      const mockRequest = setUpMockSuccessRequest({});

      // Act
      const result = await putRenameGroup(mockGroupId, mockRequestBody);

      // Assert
      expect(result.unwrap()).toEqual(undefined);
      expect(mockRequest).toHaveBeenCalledWith({
        url: expect.stringContaining(`/groups/${mockGroupId}`),
        method: 'PUT',
        options: {
          body: JSON.stringify(mockRequestBody),
        },
      });
    });

    it('throws an error on API failure', async () => {
      // Arrange mock error and request
      const mockError = new Error('API error');
      setUpMockErrorRequest(mockError);

      // Act
      const result = await putRenameGroup(mockGroupId, mockRequestBody);

      // Assert
      expect(result.unwrapError()).toEqual(mockError.message);
    });
  });

  describe('deleteGroup', () => {
    const mockGroupId = 'a3kdifut-a520-c2cb-1be7-d90710691861';

    it('should return Ok result on success', async () => {
      /* Arrange */
      (request as jest.Mock).mockResolvedValue({});

      /* Act */
      const result = await deleteGroup(mockGroupId);

      /* Assert */
      expect(result.unwrap()).toBe(undefined);
      expect(request).toHaveBeenCalledWith({
        url: expect.stringContaining(`/groups/${mockGroupId}`),
        method: 'DELETE',
      });
    });

    it('should return Err result if API request fails', async () => {
      /* Arrange */
      const mockError = new Error('API error');
      (request as jest.Mock).mockRejectedValue(mockError);

      /* Act */
      const result = await deleteGroup(mockGroupId);

      /* Assert */
      expect(result.unwrapError()).toBe(mockError.message);
    });
  });

  //generateInvitationLink function tests
  describe('putGenerateInvitationLink', () => {
    //mock params and response
    const mockGroupId = '6ec791b9-945c-4c1c-a872-3610521650e4';
    const mockInvitationLinkHash = 'e8ee3bc535b0c569276a801de8a3fd88';
    const mockGenerateInvitationLinkResponse = JSON.stringify({
      invitationLinkHash: mockInvitationLinkHash,
    });

    it('successfully generates invitation link', async () => {
      const mockRequest = setUpMockSuccessRequest(mockGenerateInvitationLinkResponse);
      const expectedValue = mockInvitationLinkHash;
      const result = await putGenerateInvitationLinkHash(mockGroupId);
      expect(result.ok).toBeTruthy();
      expect(result.unwrap()).toBe(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      const mockError = new Error('API response is invalid');
      setUpMockErrorRequest(mockError);
      const result = await putGenerateInvitationLinkHash(mockGroupId);
      expect(result.unwrapError()).toBe(mockError.message);
    });
  });

  //deleteMember function tests
  describe('deleteMember', () => {
    const mockGroupId = 'group1';
    const mockUserId = 'user1';

    it('should return Ok result on success', async () => {
      /* Arrange */
      (request as jest.Mock).mockResolvedValue({});

      /* Act */
      const result = await deleteMember(mockGroupId, mockUserId);

      /* Assert */
      expect(result.unwrap()).toBe(undefined);
      expect(request).toHaveBeenCalledWith({
        url: expect.stringContaining(`/groups/${mockGroupId}/users/${mockUserId}`),
        method: 'DELETE',
      });
    });

    it('should return Err result if API request fails', async () => {
      /* Arrange */
      const mockError = new Error('API error');
      (request as jest.Mock).mockRejectedValue(mockError);

      /* Act */
      const result = await deleteMember(mockGroupId, mockUserId);

      /* Assert */
      expect(result.unwrapError()).toBe(mockError.message);
    });
  });
});
