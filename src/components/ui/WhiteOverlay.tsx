import { cn } from '@/lib/tailwind/utils';

export const WhiteOverlay = () => {
  return <div className={cn('z-50 w-screen h-screen absolute top-0 left-0 bg-white opacity-75')} />;
};
