"use client";

import  Header from '@/components/header/index'
import './globals.css'
import { Signika } from 'next/font/google'
import { useState } from 'react';

const signika = Signika({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <html lang="cz" className='scroll-smooth '>
      <body className={`${signika.className} text-slate-600`}>
        <Header onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
        <main>
          {children}
        </main>        
      </body>
    </html>
  )
}
