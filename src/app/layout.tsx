import { Header } from '@/components/header/header'
import './globals.css'
import { Signika } from 'next/font/google'

const signika = Signika({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cz" className='scroll-smooth '>
      <body className={`${signika.className} text-slate-600`}>
        <Header />
        <main>
          {children}
        </main>        
      </body>
    </html>
  )
}
