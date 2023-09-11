import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
