'use client';

import '@aws-amplify/ui-react/styles.css';

import { getToken } from '@/lib/api/common/client';
import { cn } from '@/lib/tailwind/utils';

import { Authenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import styles from './LoginForm.module.css';

interface ILoginFormProps {
  setIsLoading: (isLoading: boolean) => void;
}

export const LoginForm = ({ setIsLoading }: ILoginFormProps) => {
  const router = useRouter();

  /**
   * Add event listener to the sign in button.
   * This is necessary because the button is rendered by the Authenticator component, which is from a third-party library.
   *
   * TODO: Find a better way to handle this
   * @see {@link https://github.com/nishiki-tech/nishiki-frontend/issues/284}
   */
  useEffect(() => {
    let button: HTMLButtonElement | null = null;

    /**
     * The function to be called when the sign in button is clicked.
     * It sets the loading state to true.
     */
    const handleClick = () => {
      setIsLoading(true);
    };

    // Wait for the button to be rendered and add the event listener
    setTimeout(() => {
      button = document.querySelector('.federated-sign-in-container button');
      button?.addEventListener('click', handleClick);
    }, 0);

    return () => {
      button?.removeEventListener('click', handleClick);
    };
  });

  /**
   * If the user is already signed in, redirect to the groups page
   */
  useEffect(() => {
    (async () => {
      const idToken = await getToken();
      if (idToken) router.push('/groups');
    })();
  }, [router]);

  return (
    <div className="h-12">
      <Authenticator
        socialProviders={['google']}
        hideSignUp={true}
        className={cn(styles.formWrapper)}
      />
    </div>
  );
};
