import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Edge middleware for Cloudflare compatibility
export function middleware(request: NextRequest) {
  // Get the current pathname
  const pathname = request.nextUrl.pathname;

  // Detect trailing slashes (except for the root path)
  if (pathname !== '/' && pathname.endsWith('/')) {
    // Remove trailing slash
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

// Run middleware on all pages
export const config = {
  matcher: [
    // Match all paths except:
    // - API routes (_next, /api/, /_next/, /__nextjs_original-stack-frame)
    // - Public files (robots.txt, favicon.ico, etc)
    '/((?!api|_next|_vercel|__nextjs_original-stack-frame|.*\\..*$).*)',
  ],
};
