"use client";

import React from "react";
import Image from "next/image";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { HeaderTabs } from "./tabs";
import { MobileMenu } from "./mobilemenu";
import Link from "next/link";

export default function Header({ onMobileMenuToggle, lang }: { onMobileMenuToggle: () => void, lang: string | null }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header
        id="header"
        className="flex justify-center items-center w-full border-b border-neutral bg-white text-primary-content shadow-xs p-4"
      >
        <div className="flex max-w-[1280px] w-full xl:min-w-[1280px] items-center justify-between">
          <Link
            href={lang === "en" ? "/en" : "/"}
            id="logo" className="flex h-full w-[300px] min-w-[3rem] items-center justify-start bg-white ">
            <Image
              src="/logo.webp"
              alt="Runway Logo"
              className="w-24"
              height={100}
              width={200}
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
              <Bars3BottomLeftIcon
                className="h-6 w-6 text-primary-content"
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