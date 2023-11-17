import '@/styles/globals.css';

import MobileLayout from '@/components/base/layouts/MobileLayout';
import { fontInter } from '@/const/fonts/fonts';
import { siteConfig } from '@/const/site/siteConfig';
import { cn } from '@/lib/tailwind/utils';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    // TODO add actual icons
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      {/* Reducing hydration error. Reference : https://nextjs.org/docs/messages/react-hydration-error */}
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn('min-h-screen bg-background font-sans antialiased', fontInter.variable)}
        >
          <MobileLayout>{children}</MobileLayout>
        </body>
      </html>
    </>
  );
}
