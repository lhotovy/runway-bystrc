import { defaultLocale } from '@/middleware'

// Map of slugs between languages
// Key: [language]:[slug], Value: equivalent slug in other language
const slugMap: Record<string, string> = {
  'cs:o-nas': 'en:about-us',
  'en:about-us': 'cs:o-nas',
  'cs:sluzby': 'en:services',
  'en:services': 'cs:sluzby',
  // Add more mappings as needed
}

export function getEquivalentSlug(currentLang: string, currentSlug: string, targetLang: string) {
  const key = `${currentLang}:${currentSlug}`
  const targetMapping = slugMap[key]
  
  if (targetMapping) {
    const [mappedLang, mappedSlug] = targetMapping.split(':')
    if (mappedLang === targetLang) {
      return mappedSlug
    }
  }
  
  // If no mapping found, return the original slug
  return currentSlug
}

export function getLocalizedPath(currentLang: string, targetLang: string, pathname: string) {
  // Handle homepage
  if (pathname === '/' || pathname === `/${currentLang}`) {
    return targetLang === defaultLocale ? '/' : `/${targetLang}`
  }
  
  // Extract the path parts
  let path = pathname
  if (currentLang !== defaultLocale && pathname.startsWith(`/${currentLang}/`)) {
    path = pathname.replace(`/${currentLang}/`, '/')
  }
  
  // Split the path into segments
  const segments = path.split('/').filter(Boolean)
  
  // Check if we need to translate any segments
  const translatedSegments = segments.map(segment => 
    getEquivalentSlug(currentLang, segment, targetLang)
  )
  
  // Reconstruct the path
  const translatedPath = '/' + translatedSegments.join('/')
  
  // Add language prefix if needed
  return targetLang === defaultLocale ? translatedPath : `/${targetLang}${translatedPath}`
}

export function getSimpleLocalizedPath(currentLang: string, targetLang: string, pathname: string) {
  // If we're on the homepage
  if (pathname === '/' || pathname === `/${currentLang}`) {
    return targetLang === defaultLocale ? '/' : `/${targetLang}`
  }
  
  // If switching to default language (Czech)
  if (targetLang === defaultLocale) {
    // Remove the language prefix
    return pathname.replace(`/${currentLang}/`, '/')
  }
  
  // If currently in default language (Czech)
  if (currentLang === defaultLocale) {
    // Add the new language prefix
    return `/${targetLang}${pathname}`
  }
  
  // If switching between non-default languages
  return pathname.replace(`/${currentLang}/`, `/${targetLang}/`)
}