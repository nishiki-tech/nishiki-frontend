import { MobileLayout } from '@/components/layouts/MobileLayout';
import { HeaderMenuCircleButton } from '@/components/parts/Header';
import { UserProfile } from '@/features/profile/components';
import { getCurrentUserId } from '@/lib/api/auth/server';
import { getUserById } from '@/lib/api/user/server';

export const ProfilePage = async () => {
  /**
   * Get the user ID of the logged-in user based on the auth token.
   * Using the user ID, fetch the user's information from the server.
   * @returns  The user's name on success. If the request fails,throws an error.
   */
  const getUserName = async () => {
    /**
     * TODO: Error handling in here.
     * Since we haven't decided about how to handle server side data fetching error,
     * we don't have error handling in here for now.
     * This issue is mentioned in the issue {@link https://github.com/nishiki-tech/nishiki-frontend/issues/156}
     */
    const getCurrentUserIdResult = await getCurrentUserId();
    if (getCurrentUserIdResult.ok) {
      const { userId } = getCurrentUserIdResult.unwrap();
      const getUserByIdResult = await getUserById(userId);
      if (getUserByIdResult.ok) {
        const { username } = getUserByIdResult.unwrap();
        return username;
      }
    }
    throw new Error('Failed to get user name');
  };

  const name = await getUserName();

  return (
    <MobileLayout heading="Profile" headerRight={<HeaderMenuCircleButton />}>
      <UserProfile name={name} />
    </MobileLayout>
  );
};
