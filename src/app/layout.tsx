import '@/styles/globals.css';

import { fontOutfit } from '@/const/fonts';
import { siteConfig } from '@/const/site/siteConfig';
import { cn } from '@/lib/tailwind/utils';

import type { Viewport } from 'next';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.svg?v=0',
    apple: '/apple-icon.svg?v=0',
  },
};

export const viewport: Viewport = {
  themeColor: 'var(--color-primary)',
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
          {children}
        </body>
      </html>
    </>
  );
}
