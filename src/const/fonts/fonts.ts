import { Inter, Outfit, Roboto } from 'next/font/google';

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontOutfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontRoboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});
