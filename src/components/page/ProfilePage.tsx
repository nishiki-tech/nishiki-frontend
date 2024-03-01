import { MobileLayout } from '@/components/layouts/MobileLayout';
import { HeaderMenuCircleButton } from '@/components/parts/Header';
import { UserProfile } from '@/features/profile/components';
import { getCurrentUserId } from '@/lib/api/auth/server';
import { getUserById } from '@/lib/api/user/server';

export const ProfilePage = async () => {
  /**
   * Get the user's name.
   * @return {Promise<string | undefined>} - The user's name on success, undefined on error.
   */
  const getUserName = async () => {
    const getCurrentUserIdResult = await getCurrentUserId();
    const { userId } = getCurrentUserIdResult.unwrap();
    const getUserByIdResult = await getUserById(userId);
    const { name } = getUserByIdResult.unwrap();
    return name;
  };

  // Get the user's name in here.
  const name = await getUserName();

  return (
    <MobileLayout heading="Profile" headerRight={<HeaderMenuCircleButton />}>
      <UserProfile name={name} />
    </MobileLayout>
  );
};
