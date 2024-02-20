import { request } from '@/lib/api/common/client';
import { createGroup } from '@/lib/api/group/client';

import {
  generateInvitationLinkHash,
  ICreateGroupApiResponse,
  ICreateGroupParams,
  IGenerateInvitationLink,
} from './groupApiClient.client';

jest.mock('@/lib/api/common/client/commonUtils.client', () => ({
  request: jest.fn(),
}));

/**
 * Create mock data for request method
 * @template T
 * @param mockData
 * @return mocked request method
 */
const setUpMockSuccessRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockResolvedValue(mockData);
};

/**
 * Create mock error data for request method
 * @template T
 * @param mockData
 * @return mocked request method
 */
const setUpMockErrorRequest = <T>(mockData: T) => {
  return (request as jest.MockedFunction<typeof request>).mockRejectedValue(mockData);
};

describe('API Function Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // createGroup method tests
  describe('createGroup', () => {
    // mock params and response
    const mockCreateGroupParams: ICreateGroupParams = { groupName: 'Shared-house' };
    const mockCreateGroupResponse: ICreateGroupApiResponse = {
      groupId: 'a3kdifut-a520-c2cb-1be7-d90710691861',
    };
    it('successfully creates a group', async () => {
      const mockRequest = setUpMockSuccessRequest(mockCreateGroupResponse);
      const expectedValue = mockCreateGroupResponse.groupId;

      const result = await createGroup(mockCreateGroupParams);

      expect(result).toBe(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      setUpMockErrorRequest(new Error('Network error'));
      const result = createGroup(mockCreateGroupParams);
      expect(result).rejects.toThrow('API response is invalid');
    });
  });

  //generateInvitationlink method tests
  describe('generateInvitationLink', () => {
    //mock params and response
    const mockGenerateInvitationLinkParams: string = '6ec791b9-945c-4c1c-a872-3610521650e4';
    const mockGenerateInvitationLinkResponse: IGenerateInvitationLink = {
      invitationLinkHash: 'e8ee3bc535b0c569276a801de8a3fd88',
    };
    it('successfully generates invitation link', async () => {
      const mockRequest = setUpMockSuccessRequest(mockGenerateInvitationLinkResponse);
      const expectedValue = mockGenerateInvitationLinkResponse.invitationLinkHash;

      const result = await generateInvitationLinkHash(mockGenerateInvitationLinkParams);

      expect(result).toEqual(expectedValue);
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    it('throws an error on API failure', async () => {
      setUpMockErrorRequest(new Error('Network error'));
      const result = generateInvitationLinkHash(mockGenerateInvitationLinkParams);
      expect(result).rejects.toThrow('API response is invalid');
    });
  });
});
