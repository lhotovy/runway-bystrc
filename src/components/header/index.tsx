"use client";

import React from "react";
import Image from "next/image";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { HeaderTabs } from "./tabs";
import { MobileMenu } from "./mobilemenu";
import Link from "next/link";

export default function Header({ onMobileMenuToggle }: { onMobileMenuToggle: () => void }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header
        id="header"
        className="flex h-12 min-h-[3rem] w-full items-center justify-end border-b border-neutral bg-primary font-inter text-primary-content shadow-sm"
      >
        <Link
          href={"/"}
          id="logo" className="flex h-full w-[300px] min-w-[3rem] items-center justify-center bg-secondary p-4">
          <Image
            src="/logo.jpeg"
            alt="Runway Logo"
            height={100}
            width={100}
          />
        </Link>
        <div className="flex h-full w-full items-center justify-end">       
          <HeaderTabs />          
        </div>
        <div className="sticky top-0 z-10 flex h-12 flex-shrink-0">
          <button
            type="button"
            className="px-4 text-base-100 focus:outline-none md:hidden"
            onClick={onMobileMenuToggle}
          >
            <Bars3BottomLeftIcon
              className="h-6 w-6 text-primary-content"
              aria-hidden="true"
            />
          </button>
        </div>
      </header>
      <MobileMenu
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </>
  );
}