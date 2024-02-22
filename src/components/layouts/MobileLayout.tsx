import { BottomTabs, Header } from '@/components/parts';

import { FC, ReactNode } from 'react';

interface IMobileLayoutProps {
  children: ReactNode;
  heading: string;
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
}

export const MobileLayout: FC<IMobileLayoutProps> = ({
  children,
  heading,
  headerLeft,
  headerRight,
}) => {
  return (
    // The top and bottom padding is intended to make space for the header and bottom tabs.
    <div className="pt-12 pb-16 min-h-screen">
      <Header heading={heading} left={headerLeft} right={headerRight} />
      {children}
      <BottomTabs />
    </div>
  );
};
