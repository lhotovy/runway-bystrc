"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { menuTexts } from "@/data/staticPages/menu";
import CompleteLanguageSwitcher from "../langSwitcher";

interface MobileMenuProps {
  sidebarOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setSidebarOpen: (open: boolean) => void;
  lang: string | null;
}

export function MobileMenu({ sidebarOpen, setSidebarOpen, lang }: MobileMenuProps) {
  const data = menuTexts[lang as keyof typeof menuTexts];
  const pathname = usePathname();

  const [activitiesOpen, setActivitiesOpen] = useState(false);

  const toggleActivities = () => {
    setActivitiesOpen((prev) => !prev);
  };

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetTitle className="hidden">Menu</SheetTitle>
      <SheetContent side="left" className="w-screen border-0 p-0">
        <div className="flex h-full flex-col items-center">
          {/* Header */}
          <div className="flex w-full flex-row items-center justify-start bg-white shadow-xs">
            <Link
              href={lang === "en" ? "/en" : "/"}
              id="logo"
              className="flex h-12 items-center justify-center"
            >
              <Image src="/logo_white_cropped.png" alt="Runway Logo" height={64} width={150} className="h-12" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="w-full h-full items-center justify-center transition-all ease-in-out flex">
            <ul className="w-full flex h-full flex-col items-center pt-4">
              {/* About Us */}
              <Link href={lang === "cs" ? "/o-nas" : `/${lang}/o-nas`} onClick={() => setSidebarOpen(false)}>
                <li
                  className={`flex min-h-full py-0 my-4 flex-1 cursor-pointer items-center justify-center whitespace-nowrap text-center text-primary-content no-underline ${
                    pathname === (lang === "cs" ? "/o-nas" : `/${lang}/o-nas`) ? `opacity-100` : `opacity-50`
                  } transition-all duration-300 hover:opacity-100`}
                >
                  <p className="text-sm">{data.aboutUs}</p>
                </li>
              </Link>

              {/* Activities Dropdown */}
              <li className="w-full flex flex-col items-center">
                <div
                  className="flex h-12 items-end justify-center gap-x-2 cursor-pointer opacity-50 w-fit"
                  onClick={toggleActivities}                 
                >
                  <p className="text-sm text-primary-content">{data.activities}</p>
                  {activitiesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4 pb-1" />}
                </div>
                <ul
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    activitiesOpen ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                  
                >
                  {data.activitiesDropdown.map((tab, index) => (
                    <Link href={tab.url ?? "/"} key={index} onClick={() => setSidebarOpen(false)}>
                      <li
                        className={`flex py-4 cursor-pointer items-center justify-start whitespace-nowrap text-primary-content no-underline ${
                          pathname === tab.url ? `opacity-100 pl-2` : `opacity-50`
                        } transition-all duration-300 hover:opacity-100`}
                      >
                        <p className="text-sm">{tab.name}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </li>

              {/* Special Events */}
              <Link href={lang === "cs" ? "/specialni-akce" : `/${lang}/specialni-akce`} onClick={() => setSidebarOpen(false)}>
                <li
                  className={`flex min-h-full py-0 my-4 flex-1 cursor-pointer items-center justify-center whitespace-nowrap text-center text-primary-content no-underline ${
                    pathname === (lang === "cs" ? "/specialni-akce" : `/${lang}/specialni-akce`) ? `opacity-100` : `opacity-50`
                  } transition-all duration-300 hover:opacity-100`}
                >
                  <p className="text-sm">{data.specialEvents}</p>
                </li>
              </Link>

              {/* Contact */}
              <Link href={lang === "cs" ? "/kontakt" : `/${lang}/kontakt`} onClick={() => setSidebarOpen(false)}>
                <li
                  className={`flex min-h-full py-0 my-4 flex-1 cursor-pointer items-center justify-center whitespace-nowrap text-center text-primary-content no-underline ${
                    pathname === (lang === "cs" ? "/kontakt" : `/${lang}/kontakt`) ? `opacity-100` : `opacity-50`
                  } transition-all duration-300 hover:opacity-100`}
                >
                  <p className="text-sm">{data.contact}</p>
                </li>
              </Link>

                {/* Language Switcher */}
                <li className="w-full text-sm flex justify-center mt-7 opacity-50">
                <CompleteLanguageSwitcher currentLang={lang || ''} />
              </li>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
