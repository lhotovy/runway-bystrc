"use client"

import { usePathname, useRouter } from 'next/navigation'
import { locales } from '@/middleware'
import { getLocalizedPath, getSimpleLocalizedPath } from '@/lib/languageUtils'
import EN from "country-flag-icons/react/3x2/GB"
import CZ from "country-flag-icons/react/3x2/CZ"
import { LangOptions } from '@/types';

export default function CompleteLanguageSwitcher({ 
    currentLang,
    currentSlug = null // Optional: for dynamic routes with different slugs in different languages
}: { 
    currentLang: LangOptions,
    currentSlug?: string | null
}) {
    const pathname = usePathname()
    const router = useRouter();
    let currentIcon = null;
    currentIcon = currentLang === 'en' ? <CZ className='w-4 h-4' /> : <EN className='w-4 h-4' />;
  
    const getSwitchPath = () => {
        const targetLocale = locales.find((locale) => locale !== currentLang);
        if (!targetLocale) return '#'; // Fallback in case no other locale is found

        return currentSlug
            ? getLocalizedPath(currentLang, targetLocale, pathname)
            : getSimpleLocalizedPath(currentLang, targetLocale, pathname);
    };

    const handleSwitch = () => {
        const targetLocale = locales.find((locale) => locale !== currentLang);
        if (!targetLocale) return;
        // Store user preference in localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('preferredLang', targetLocale);
        }
        router.replace(getSwitchPath());
    };

    return (
        <div>
            <button 
                onClick={handleSwitch}
                className="ml-2 mt-1 cursor-pointer text-white"
            >
                {currentIcon}
            </button>
        </div>
    );  
}