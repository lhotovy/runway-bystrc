import { locales, defaultLocale } from '@/middleware';
import RootLayoutClient from './layoutClient';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  
  // Validate that the lang parameter is supported
  const validLang = locales.includes(lang) ? lang : defaultLocale

  return (
    <RootLayoutClient lang={validLang}>{children}</RootLayoutClient>
  )
}
