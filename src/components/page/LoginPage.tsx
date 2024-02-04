import { LogoVerticalPrimary } from '@/assets/images/logos';
import { LoginForm } from '@/components/ui/LoginForm';
export const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="transform -translate-y-1/3 flex flex-col items-center justify-center">
        <LogoVerticalPrimary className="w-32 h-26 mb-20" />
        <LoginForm />
      </div>
    </div>
  );
};
