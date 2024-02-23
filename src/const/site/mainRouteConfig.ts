import {
  FoodIcon_Off,
  FoodIcon_On,
  HomeIcon_Off,
  HomeIcon_On,
  ProfileIcon_Off,
  ProfileIcon_On,
} from '@/assets/images/icons';

export type MainRouteKey = 'groups' | 'foods' | 'profile';

export type MainRoutes = {
  [key in MainRouteKey]: {
    path: `/${string}`;
    label: string;
    icons: {
      // Using `any` to avoid conflicts with @svgr/webpack plugin or babel-plugin-inline-react-svg plugin.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      on: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      off: any;
    };
  };
};

export const mainRoutes: MainRoutes = {
  groups: {
    path: '/groups',
    label: 'Groups',
    icons: {
      on: HomeIcon_On,
      off: HomeIcon_Off,
    },
  },
  foods: {
    path: '/foods',
    label: 'Foods',
    icons: {
      on: FoodIcon_On,
      off: FoodIcon_Off,
    },
  },
  profile: {
    path: '/profile',
    label: 'Profile',
    icons: {
      on: ProfileIcon_On,
      off: ProfileIcon_Off,
    },
  },
};
