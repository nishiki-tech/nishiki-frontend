import { MobileLayout } from '@/components/layouts/MobileLayout';
import { HeaderMenuCircleButton } from '@/components/parts/Header';

export const ProfilePage = () => {
  return (
    <MobileLayout heading="Profile" headerRight={<HeaderMenuCircleButton />}>
      Profile Page
    </MobileLayout>
  );
};
