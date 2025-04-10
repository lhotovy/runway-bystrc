"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import * as React from "react"
import { Plus, X } from 'lucide-react'
import Image from "next/image"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { menuTexts } from "@/data/staticPages/menu";

interface MobileMenuProps {
  sidebarOpen: boolean
  // eslint-disable-next-line no-unused-vars
  setSidebarOpen: (open: boolean) => void
  lang: string | null
}

export function MobileMenu({ sidebarOpen, setSidebarOpen, lang }: MobileMenuProps) {
  const data = menuTexts[lang as keyof typeof menuTexts];

  // determine the index of pathname in menuItems
  const pathname = usePathname();
  const currentIndex = data.activitiesDropdown
    .map((item) => item.url)
    .indexOf(pathname as string);
  
  // eslint-disable-next-line no-unused-vars
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(
    currentIndex <= data.activitiesDropdown.length && currentIndex >= 0
      ? currentIndex
      : null,
  );

  const handleMenuItemHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetTitle className="hidden">Menu</SheetTitle>
      <SheetContent
        side="left"
        className="w-screen border-0 p-0"
      >
        <div className="flex h-full flex-col items-center">
          {/* Header */}
          <div className="flex w-full flex-row items-center justify-start bg-white shadow-xs">
            <a
              href={"/"}
              id="logo" className="flex h-full w-[65px] min-w-[3rem] items-center justify-center bg-secondary p-4">
              <Image
                src="/logo.jpeg"
                alt="Runway Logo"
                height={100}
                width={50}
              />
            </a>
           
            {/* <button            
              className="ml-auto px-4 hover:bg-transparent"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button> */}
          </div>

          {/* Team Selector
          <div className="px-12 pt-24">
            <Select onValueChange={(val) => { void (val); }}>
              <SelectTrigger className={`w-full ring-0 focus:ring-0 text-base-100`}>
                Amin&lsquo;s Team
              </SelectTrigger>
              <SelectContent className='bg-white shadow-md '>
                <SelectItem
                  value={"Amin"} className='hover:bg-btnhover focus:bg-btnhover cursor-pointer'
                >
                  <div className="flex flex-row justify-start items-center gap-2">
                    <div className="w-8 h-8 bg-secondary text-base-100 text-[11px] font-medium rounded-full flex justify-center items-center">
                      <span>AT</span>
                    </div>
                    <p className="font-medium text-sm text-primary text-left">Amin&lsquo;s Team</p>
                  </div>
                </SelectItem>
                <SelectItem
                  value={"Miller"} className='hover:bg-btnhover focus:bg-btnhover cursor-pointer'
                >
                  <div className="flex flex-row justify-start items-center gap-2">
                    <div className="w-8 h-8 bg-accent text-base-100 text-[11px] font-medium rounded-full  flex justify-center items-center">
                      <span>MT</span>
                    </div>
                    <p className="font-medium text-sm text-primary text-left">Miller&lsquo;s Team</p>
                  </div>
                </SelectItem>
                <SelectItem
                  value={"create"} className='hover:bg-btnhover focus:bg-btnhover cursor-pointer'
                >
                  <div className="flex flex-row justify-start items-center gap-2">
                    <div className="w-8 h-8 border-2 border-dashed text-neutral-dark text-[11px] font-medium rounded-full  flex justify-center items-center">
                      <Plus />
                    </div>
                    <p className="font-medium text-sm text-primary text-left">Create New Team</p>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          {/* Navigation */}
          <div
            className="w-full h-full items-center justify-center transition-all ease-in-out flex"
          >
            <ul
              className="w-full flex h-full flex-col items-center pt-4"
            >
              {data.activitiesDropdown.map((tab, index) => {
                return (
                  <Link
                    href={tab.url}
                    key={index}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <li
                      key={index}                    
                      className={`flex min-h-full py-0 my-4 flex-1 cursor-pointer items-center justify-center whitespace-nowrap text-center text-primary-content no-underline ${pathname === tab.url ? `opacity-100 border-b-2 border-gray-9` : `opacity-50`
                        }  transition-all duration-300 hover:opacity-100`}
                      onMouseEnter={() => handleMenuItemHover(index)}
                      onMouseLeave={() => handleMenuItemHover(null)}
                    >
                      <p className="text-sm">{tab.name}</p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>        
        </div>
      </SheetContent>
    </Sheet>
  )
}
