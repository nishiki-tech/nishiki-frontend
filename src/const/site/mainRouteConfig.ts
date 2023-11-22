export const mainRouteConfig = {
  groups: { path: '/groups', title: 'Groups' },
  foods: { path: '/foods', title: 'Foods' },
  profile: { path: '/profile', title: 'Profile' },
} as const;

export type MainRouteName = keyof typeof mainRouteConfig;
