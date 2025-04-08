"use client"

import { usePathname, useRouter } from 'next/navigation'
import { locales } from '@/middleware'
import { getLocalizedPath, getSimpleLocalizedPath } from '@/lib/languageUtils'

export default function CompleteLanguageSwitcher({ 
    currentLang,
    currentSlug = null // Optional: for dynamic routes with different slugs in different languages
}: { 
    currentLang: string,
    currentSlug?: string | null
}) {
    const pathname = usePathname()
    const router = useRouter();
  
    const getSwitchPath = () => {
        const targetLocale = locales.find((locale) => locale !== currentLang);
        if (!targetLocale) return '#'; // Fallback in case no other locale is found

        return currentSlug
            ? getLocalizedPath(currentLang, targetLocale, pathname)
            : getSimpleLocalizedPath(currentLang, targetLocale, pathname);
    };

    return (
        <div>
            <button 
                onClick={() => router.push(getSwitchPath())}
                className="ml-1 cursor-pointer"
            >
                CS/EN
            </button>
        </div>
    );  
}