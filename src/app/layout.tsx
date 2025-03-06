"use client";

import  Header from '@/components/header/index'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import { useState } from 'react';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <html lang="cz" className='scroll-smooth '>
      <body className={`${openSans.className} text-slate-600 w-full`}>       
        <Header onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
        <main className="max-w-[1280px] mx-auto">
          {children}
        </main> 
      </body>
    </html>
  )
}
