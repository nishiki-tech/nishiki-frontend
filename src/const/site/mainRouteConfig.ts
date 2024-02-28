import {
  IconFoodOff,
  IconFoodOn,
  IconHomeOff,
  IconHomeOn,
  IconProfileOff,
  IconProfileOn,
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
      on: IconHomeOn,
      off: IconHomeOff,
    },
  },
  foods: {
    path: '/foods',
    label: 'Foods',
    icons: {
      on: IconFoodOn,
      off: IconFoodOff,
    },
  },
  profile: {
    path: '/profile',
    label: 'Profile',
    icons: {
      on: IconProfileOn,
      off: IconProfileOff,
    },
  },
};
