import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// Supported languages
export const locales = ['en', 'cs']
export const defaultLocale = 'cs'
 
// Get the preferred locale from headers, cookies, etc.
function getLocale(request: NextRequest) {
  // For simplicity, check Accept-Language header
  // In production, you might want to check cookies first
  const acceptLanguage = request.headers.get('accept-language') || ''
  
  // Check if user explicitly prefers English
  if (acceptLanguage.startsWith('en')) return 'en'
  
  // Default to Czech
  return defaultLocale
}
 
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }
  
  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  // If the path already has a locale, no need to redirect
  if (pathnameHasLocale) {
    return NextResponse.next()
  }
  
  // For paths without a locale prefix
  const locale = getLocale(request)
  
  // For English users, redirect to add the /en/ prefix
  if (locale !== defaultLocale) {
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }
  
  // For Czech users (default locale), rewrite the request to include the locale
  // This is the key part - we rewrite internally but keep the URL the same
  const url = new URL(`/${defaultLocale}${pathname}`, request.url)
  
  // Important: use rewrite, not redirect for the default locale
  return NextResponse.rewrite(url)
}

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