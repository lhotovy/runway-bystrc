import { locales, defaultLocale } from '@/middleware';
import RootLayoutClient from './layoutClient';
import { LangOptions } from '@/types';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  
  // Validate that the lang parameter is supported
  const validLang = locales.includes(lang) ? lang as LangOptions : defaultLocale as LangOptions

  return (
    <RootLayoutClient lang={validLang}>{children}</RootLayoutClient>
  )
}
