import { cn } from '@/lib/tailwind/utils';

import { forwardRef, HTMLAttributes } from 'react';

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('bg-white m-8 rounded-lg shadow-sm', className)} {...props} />
  ),
);
Card.displayName = 'Card';

// const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
//   ),
// );
// CardHeader.displayName = 'CardHeader';

// const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
//   ({ className, ...props }, ref) => (
//     <h3
//       ref={ref}
//       className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
//       {...props}
//     />
//   ),
// );
// CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn('', className)} {...props} />,
);
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-2 flex items-center space-x-4', className)} {...props} />
  ),
);
CardContent.displayName = 'CardContent';

// const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
//   ),
// );
// CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardDescription };
