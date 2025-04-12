"use client";

import  Header from '@/components/header/index'
import '../globals.css'
import { Open_Sans } from 'next/font/google'
import { useState } from 'react';
import { Footer } from '@/components/footer/footer';
import { Analytics } from "@vercel/analytics/react"

const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayoutClient({
  children,
  lang
}: {
  children: React.ReactNode
  lang: string | null
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <html className='scroll-smooth' lang={lang || undefined}>
    <head>
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
          async
        />
    </head>
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
