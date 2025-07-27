"use client";

import React from "react";
import Image from "next/image";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { HeaderTabs } from "./tabs";
import { MobileMenu } from "./mobilemenu";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

export default function Header({ onMobileMenuToggle, lang }: { onMobileMenuToggle: () => void, lang: string | null }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header
        id="header"
        className="flex justify-center items-center w-full bg-dark-blue text-primary-content py-2 pr-2 pl-0 md:p-4 max-h-[64px]"
      >
        <div className="flex max-w-[1280px] w-full xl:min-w-[1280px] items-center justify-between max-h-[64px]">
          <Link
            href={lang === "en" ? "/en" : "/"}
            id="logo"
            className="flex h-12 md:h-16 items-center justify-start overflow-hidden"
          >
            <Image
              src="/logo_white_cropped.png"
              alt="Runway Logo"
              className="w-full h-full object-contain"
              height={64}
              width={120}
            />
          </Link>
          <div className="hidden sm:flex h-full w-full items-center justify-end">       
            <HeaderTabs lang={lang} />          
          </div>
          <div className="sticky top-0 z-10 flex h-12 shrink-0">
            <button
              type="button"
              className="px-4 text-base-100 focus:outline-hidden sm:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <MenuIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <MobileMenu
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          lang={lang}
        />
      </header>
     
    </>
  );
}