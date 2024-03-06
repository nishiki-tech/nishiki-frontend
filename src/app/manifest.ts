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
    shortcuts: [
      {
        name: 'Group list',
        short_name: 'Groups',
        url: '/groups',
      },
      {
        name: 'Add foods',
        short_name: 'Foods',
        url: '/foods',
      },
      {
        name: 'Profile',
        short_name: 'Profile',
        url: '/profile',
      },
    ],
    screenshots: [],
    icons: [
      {
        src: 'images/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'images/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'images/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any',
      },

      {
        src: 'images/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },

      {
        src: 'images/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any',
      },

      {
        src: 'images/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },

      {
        src: 'images/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any',
      },

      {
        src: 'images/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/any',
        purpose: 'any',
      },
    ],
  };
}
