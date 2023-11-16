export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  mainNav: NavItem[];
};

export const siteConfig: SiteConfig = {
  name: 'Nishiki',
  description: 'A food sharing app for groups',
  mainNav: [
    {
      title: 'Groups',
      href: '/groups',
    },
    {
      title: 'Foods',
      href: '/foods',
    },
    {
      title: 'Profile',
      href: '/profile',
    },
  ],
};
