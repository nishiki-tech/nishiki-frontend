import { MobileLayout } from '@/components/layouts/MobileLayout';
import { ProfileHeaderDropdownMenuTriggerButton, UserProfile } from '@/features/profile/components';
import { getCurrentUserId } from '@/lib/api/auth/server';
import { getUserById } from '@/lib/api/user/server';

export const ProfilePage = async () => {
  /**
   * Get the id of the logged-in user based on the auth token.
   * Using the id, fetch the user's information from the server.
   * @returns  The user's id and name on success. If the request fails,throws an error.
   */
  const getUserInfo = async () => {
    /**
     * TODO: Error handling in here.
     * Since we haven't decided about how to handle server side data fetching error,
     * we don't have error handling in here for now.
     * This issue is mentioned in the issue {@link https://github.com/nishiki-tech/nishiki-frontend/issues/156}
     */
    const getCurrentUserIdResult = await getCurrentUserId();
    if (getCurrentUserIdResult.ok) {
      const { userId } = getCurrentUserIdResult.value;
      const getUserByIdResult = await getUserById(userId);
      if (getUserByIdResult.ok) {
        const { name } = getUserByIdResult.value;
        return { userId, name };
      }
    }
    throw new Error('Failed to get user info');
  };

  const { userId, name } = await getUserInfo();

  return (
    <MobileLayout
      heading="Profile"
      headerRight={<ProfileHeaderDropdownMenuTriggerButton userId={userId} />}
    >
      <UserProfile userId={userId} name={name} />
    </MobileLayout>
  );
};
