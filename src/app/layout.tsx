import '@/styles/globals.css';

import { MobileLayout } from '@/components/layouts/MobileLayout';
import { fontOutfit } from '@/const/fonts';
import { siteConfig } from '@/const/site/siteConfig';
import { cn } from '@/lib/tailwind/utils';

import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    // TODO add actual icons
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <>
      {/* Reducing hydration error. Reference : https://nextjs.org/docs/messages/react-hydration-error */}
      <html lang="en" className={fontOutfit.variable} suppressHydrationWarning>
        <head />
        <body className={cn('min-h-screen bg-primary-lightest antialiased font-outfit')}>
          <MobileLayout>{children}</MobileLayout>
        </body>
      </html>
    </>
  );
}
