export const mainRouteConfig = {
  groups: '/groups',
  foods: '/foods',
  profile: '/profile',
} as const;

export type MainRouteName = keyof typeof mainRouteConfig;
