import '@/styles/globals.css';

import { fontOutfit } from '@/const/fonts';
import { cn } from '@/lib/tailwind/utils';

import type { Viewport } from 'next';
import { Metadata } from 'next';
import { ReactNode } from 'react';

const CLIENT_BASE_URL = process.env.NEXT_PUBLIC_CLIENT_BASE_URL;

export const metadata: Metadata = {
  title: {
    default: 'Nishiki',
    template: '%s | Nishiki',
  },
  description:
    'Nishiki is an app for tracking and sharing food inventories within groups for better pantry management.',
  icons: {
    icon: '/favicon.svg?v=0',
    apple: '/apple-icon.svg?v=0',
  },
  openGraph: {
    title: 'Nishiki',
    description:
      'Nishiki is an app for tracking and sharing food inventories within groups for better pantry management.',
    type: 'website',
    url: CLIENT_BASE_URL,
    images: [
      {
        url: `${CLIENT_BASE_URL}/og.svg?v=0`,
        width: 1200,
        height: 630,
        alt: 'Nishiki',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Nishiki',
    description:
      'Nishiki is an app for tracking and sharing food inventories within groups for better pantry management.',
    images: [
      {
        /**
         * SVG is not supported by Twitter.
         * @see {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary}
         */
        url: `${CLIENT_BASE_URL}/og.png?v=0`,
        width: 1200,
        height: 630,
        alt: 'Nishiki',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#6ab3ab', // --color-primary
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
