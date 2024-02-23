/**
 * This component should be used at the root level of a page component,
 * located in the "src/components/page/" directory.
 */

import { BottomMenu, Header } from '@/components/parts';

import { FC, ReactNode } from 'react';

interface IMobileLayoutProps {
  /**
   * The main content to display within the layout.
   */
  children: ReactNode;
  /**
   * The heading text to display at the center of the header.
   */
  heading: string;
  /**
   * The component to display on the left side of the header.
   * {@link HeaderBackButton} is a common use case for this prop.
   */
  headerLeft?: ReactNode;
  /**
   * The component to display on the right side of the header.
   * {@link HeaderMenuCircleButton} is a common use case for this prop.
   */
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
      <BottomMenu />
    </div>
  );
};
