import { MobileLayout } from '@/components/layouts/MobileLayout';
import { HeaderMenuCircleButton } from '@/components/parts/Header';
import { UserProfile } from '@/features/profile/components';

export const ProfilePage = () => {
  return (
    <MobileLayout heading="Profile" headerRight={<HeaderMenuCircleButton />}>
      <UserProfile />
    </MobileLayout>
  );
};
