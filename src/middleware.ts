import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { activities } from './data/activities';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {  
    const appPaths = [...activities.map((activity) => `/${activity.slug}`), "/"];   
    
    if (!appPaths.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/", request.url));
    };
    
    return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|image|sitemap.xml|robots.txt|favicon.ico|maminky.png|public/.*).*)"
}