import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Signika } from 'next/font/google'

const signika = Signika({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Runway Bystrc',
  description: 'Runway Bystrc - otevřená a moderní církev pro Brno-Bystrc. Pořádáme letní tábory, setkání mládeže, dětský klub, klub maminek, kurzy a mnoho dalšího.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cz">
      <body className={`${signika.className} text-slate-600 flex flex-col items-center justify-center`}>
        <Header />
        {children}</body>
    </html>
  )
}
