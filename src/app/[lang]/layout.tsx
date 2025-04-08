import { locales, defaultLocale } from '@/middleware';
//import './globals.css';
import RootLayoutClient from './layoutClient';
import { getDictionary } from './dictionaries';

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
  
  // Get dictionary for the current language
  //const dictionary = await getDictionary(validLang)
 
  return (
    <RootLayoutClient lang={validLang}>{children}</RootLayoutClient>
  )
}
