export const APP_CONST = {
  NAME: 'Nishiki',
  DESCRIPTION:
    'Nishiki is an app for tracking and sharing food inventories within groups for better pantry management.',
  BASE_URL: process.env.NEXT_PUBLIC_CLIENT_BASE_URL || 'http://localhost:3000',
  THEME_COLOR: '#6ab3ab',
  BG_COLOR: '#abd4cf',
} as const;
