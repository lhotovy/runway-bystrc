"use client";

import  Header from '@/components/header/index'
import '../globals.css'
import { Open_Sans } from 'next/font/google'
import { useState, useEffect } from 'react';
import { Footer } from '@/components/footer/footer';
import { Analytics } from "@vercel/analytics/react"
import { usePathname, useRouter } from 'next/navigation';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayoutClient({
  children,
  lang
}: {
  children: React.ReactNode
  lang: string | null
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined' || !lang) return;
    const preferredLang = localStorage.getItem('preferredLang');
    if (!preferredLang) return;
    // If user prefers English but is not on /en, redirect
    if (preferredLang === 'en' && !pathname.startsWith('/en')) {
      router.replace(`/en${pathname === '/' ? '' : pathname}`);
    }
    // If user prefers Czech but is on /en, redirect to Czech route
    if (preferredLang === 'cs' && pathname.startsWith('/en')) {
      router.replace(pathname.replace(/^\/en(\/|$)/, '/') || '/');
    }
  }, [pathname, router, lang]);

  return (
    <html className='scroll-smooth' lang={lang || undefined}>
    {/* <head>
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
          async
        />
    </head> */}
      <body className={`${openSans.className} text-gray-9 w-full`}>       
        <Header onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} lang={lang} />
        <main className="max-w-[1280px] mx-auto px-6 xl:px-0">
          {children}
          <Analytics />
        </main> 
        <Footer lang={lang} />
      </body>
    </html>
  )
}
