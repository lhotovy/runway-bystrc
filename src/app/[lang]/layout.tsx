import { locales, defaultLocale } from '@/middleware';
import RootLayoutClient from './layoutClient';
import { LangOptions } from '@/types';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: LangOptions }>
}) {
  const { lang } = await params;
  
  // Validate that the lang parameter is supported
  const validLang = locales.includes(lang) ? lang : defaultLocale as LangOptions

  return (
    <RootLayoutClient lang={validLang}>{children}</RootLayoutClient>
  )
}
