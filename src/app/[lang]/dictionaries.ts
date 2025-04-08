import 'server-only'

// Define supported languages
const dictionaries = {
  en: () => import('../../data/dictionaries/en.json').then((module) => module.default),
  cs: () => import('../../data/dictionaries/cs.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  // Fallback to Czech if the locale is not supported
  return dictionaries[locale as keyof typeof dictionaries]?.() || dictionaries.cs()
}