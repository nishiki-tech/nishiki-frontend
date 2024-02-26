'use client';

import { ArrowLeftIcon, MenuCircleIcon } from '@/assets/images/icons';
import { H2 } from '@/components/Typography';
import { Button, Icon } from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { UrlObject } from 'url';

interface IHeaderProps {
  /**
   * The heading text to display at the center of the header.
   */
  heading?: string;
  /**
   * The component to display on the left side of the header.
   * {@link HeaderBackButton} is a common use case for this prop.
   */
  left?: ReactNode;
  /**
   * The component to display on the right side of the header.
   * {@link HeaderMenuCircleButton} is a common use case for this prop.
   */
  right?: ReactNode;
}

/**
 * A header component for mobile layouts.
 */
export const Header = ({ heading, left, right }: IHeaderProps) => {
  return (
    <header
      className={cn('fixed top-0 z-40 w-full h-12 bg-white flex items-center justify-center')}
    >
      {!!left && <div className="absolute left-0 h-full">{left}</div>}
      {!!heading && <H2>{heading}</H2>}
      {!!right && <div className="absolute right-0 h-full">{right}</div>}
    </header>
  );
};

interface IBackButtonProps extends Omit<LinkProps<HTMLAnchorElement>, 'href' | 'className'> {
  /**
   * The URL to navigate to when the button is clicked.
   */
  href: UrlObject;
  /**
   * Additional class names to apply to the Link component.
   */
  className?: string;
  /**
   * Additional props to pass to the Link component.
   * @see {@link LinkProps}
   */
  props?: Omit<LinkProps<HTMLAnchorElement>, 'href' | 'className'>;
}

/**
 * A back button for the header. It is designed to navigate to a specified page.
 */
export const HeaderBackButton = ({ href, className, ...props }: IBackButtonProps) => {
  return (
    <Link
      href={href}
      className={cn('h-full aspect-square pl-4 flex items-center', className)}
      {...props}
    >
      <Icon icon={ArrowLeftIcon} size={4} color="gray-dark" />
    </Link>
  );
};

/**
 * A menu button for the header. It is designed as a trigger button for a dropdown menu.
 * @param props - Any additional props to pass to the button element.
 */
export const HeaderMenuCircleButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => (
  <Button className="h-full px-4 flex items-center" ref={ref} {...props}>
    <Icon icon={MenuCircleIcon} size={6} color="black" />
  </Button>
));
HeaderMenuCircleButton.displayName = 'HeaderMenuCircleButton';
