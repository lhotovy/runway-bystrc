import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { activities, events } from './data/activities';
 
export function middleware(request: NextRequest) {  
    const appPaths = [
        ...activities.map((activity) => `/${activity.slug}`),
        ...events.map((event) => `/${event.slug}`),
        "/", 
        "/kontakt",
        "/prihlaska/hory"
    ];  
    
    // Only apply the redirect logic if the path is not in appPaths
    if (!appPaths.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/", request.url));
    };
    
    return NextResponse.next();
}
 
// Improved matcher that properly excludes all static assets
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (public files)
     * 4. all root level files in /public (favicon.ico, robots.txt, etc.)
     */
    '/((?!api|_next/static|_next/image|images|static|favicon.ico|robots.txt|sitemap.xml|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.svg$).*)'
  ]
}