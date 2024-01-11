import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';

import { fetchAuthSession } from 'aws-amplify/auth/server';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Next.js middleware is the code which is run before a request is completed
 * @param request: NextRequest
 * @returns NextResponse
 */
export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session.tokens !== undefined;
      } catch (error) {
        // if user is not logged in.
        return false;
      }
    },
  });

  const isOnLoginPage = request.nextUrl.pathname.startsWith('/login');

  // If user is authenticated
  if (authenticated) {
    // if user is in login page, redirect to '/groups'
    return isOnLoginPage ? NextResponse.redirect(new URL('/groups', request.url)) : response;
  }

  // If user is not authenticated and on login page, stay, otherwise, redirect to login page.
  return isOnLoginPage ? response : NextResponse.redirect(new URL('/login', request.url));
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // '/((?!api|_next/static|_next/image|favicon.ico|sign-in).*)',
    '/login/:path*',
    '/groups/:path*',
    '/foods/:path*',
    '/profile/:path*',
  ],
};
