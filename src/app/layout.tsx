import '@/styles/globals.css';

import { APP_CONST } from '@/const/appConst';
import { fontOutfit } from '@/const/fonts';
import { cn } from '@/lib/tailwind/utils';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

/**
 * This object configures the metadata and generate meta tags for the app.
 * @see {@link https://nextjs.org/docs/app/api-reference/functions/generate-metadata}
 */
export const metadata: Metadata = {
  title: {
    default: APP_CONST.NAME,
    template: `%s | ${APP_CONST.NAME}`,
  },
  description: APP_CONST.DESCRIPTION,
  icons: {
    icon: '/images/icons/favicon.svg?v=0',
    apple: '/images/icons/apple-touch-icon.png?v=0',
  },
  openGraph: {
    siteName: APP_CONST.NAME,
    description: APP_CONST.DESCRIPTION,
    type: 'website',
    url: APP_CONST.BASE_URL,
    images: [
      {
        url: `${APP_CONST.BASE_URL}/images/og.png?v=0`,
        width: 1200,
        height: 630,
        alt: APP_CONST.NAME,
      },
    ],
  },
  twitter: {
    // card: 'summary',
    card: 'summary_large_image',
    title: APP_CONST.NAME,
    description: APP_CONST.DESCRIPTION,
  },
};

/**
 * This object configures the viewport and generate meta tags for the app.s
 * @see {@link https://nextjs.org/docs/app/api-reference/functions/generate-viewport}
 */
export const viewport: Viewport = {
  themeColor: APP_CONST.THEME_COLOR, // --color-primary
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
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
