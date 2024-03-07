/**
 * This file is used to generate the web app manifest file.
 * @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest}
 */
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nishiki',
    short_name: 'Nishiki',
    description:
      'An app for tracking and sharing food inventories within groups for better pantry management.',
    categories: ['food', 'lifestyle'],
    lang: 'en',
    start_url: '/groups',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#abd4cf',
    theme_color: '#6ab3ab',
    prefer_related_applications: false,
    /**
     * The `shortcut` property defines the shortcuts displayed
     * when long-pressing the app icon on Android devices.
     */
    shortcuts: [
      {
        name: 'Foods',
        short_name: 'Foods',
        url: '/foods',
      },
      {
        name: 'Groups',
        short_name: 'Groups',
        url: '/groups',
      },
      {
        name: 'Profile',
        short_name: 'Profile',
        url: '/profile',
      },
    ],
    /**
     * The `screenshots` property defines the screenshots displayed
     * when installing the app on Android devices.
     */
    screenshots: [
      {
        src: 'images/screenshots/app_screenshot_signin.png',
        sizes: '1215x605',
        type: 'image/png',
      },
      {
        src: 'images/screenshots/app_screenshot_foods.png',
        sizes: '1215x605',
        type: 'image/png',
      },
      {
        src: 'images/screenshots/app_screenshot_group_single.png',
        sizes: '1215x605',
        type: 'image/png',
      },
      {
        src: 'images/screenshots/app_screenshot_groups.png',
        sizes: '1215x605',
        type: 'image/png',
      },
    ],
    /**
     * `maskable` icons are used for PWA icons for Android
     * `any` icons are used for PWA icons for other platforms, such as Desktop
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking}
     * @see {@link https://web.dev/articles/maskable-icon}
     */
    icons: [
      {
        src: 'images/icons/manifest/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/manifest/icon-rounded-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'images/icons/manifest/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/manifest/icon-rounded-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'images/icons/manifest/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/manifest/icon-rounded-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any',
      },

      {
        src: 'images/icons/manifest/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/manifest/icon-rounded-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },

      {
        src: 'images/icons/manifest/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/manifest/icon-rounded-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any',
      },

      {
        src: 'images/icons/manifest/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/manifest/icon-rounded-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },

      {
        src: 'images/icons/manifest/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/manifest/icon-rounded-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any',
      },

      {
        src: 'images/icons/manifest/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/manifest/icon-rounded-512x512.png',
        sizes: '512x512',
        type: 'image/any',
        purpose: 'any',
      },
    ],
  };
}
