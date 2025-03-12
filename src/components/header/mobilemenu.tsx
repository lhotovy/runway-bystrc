"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import * as React from "react"
import { Plus, X } from 'lucide-react'
import Image from "next/image"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Button } from "@/components/button"
import Link from "next/link"

interface MobileMenuProps {
  sidebarOpen: boolean
  // eslint-disable-next-line no-unused-vars
  setSidebarOpen: (open: boolean) => void
}

export function MobileMenu({ sidebarOpen, setSidebarOpen }: MobileMenuProps) {
  const navLinkGroupsOwner = [
    { name: "Planning", url: "/planning", icon: "Calendar", key: "key1" },
    { name: "Overview", url: "/overview", icon: "Home", key: "key2" },
    { name: "Times", url: "/times", icon: "Clock", key: "key4" },
    { name: "Users", url: "/users", icon: "Settings", key: "key5" },
    { name: "Clients", url: "/clients", icon: "People", key: "key6" },
    { name: "Invoices", url: "/invoices", icon: "DocumentSet", key: "key7" },
  ];

  // determine the index of pathname in menuItems
  const pathname = usePathname();
  const currentIndex = navLinkGroupsOwner
    .map((item) => item.url)
    .indexOf(pathname as string);
  
  // eslint-disable-next-line no-unused-vars
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(
    currentIndex <= navLinkGroupsOwner.length && currentIndex >= 0
      ? currentIndex
      : null,
  );

  const handleMenuItemHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent
        side="left"
        className="w-full border-0 bg-[#1E1B2E] p-0"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex w-full flex-row items-center justify-center bg-primary font-inter text-primary-content shadow-xs">
            <a
              href={"/"}
              id="logo" className="flex h-full w-[65px] min-w-[3rem] items-center justify-center bg-secondary p-4">
              <Image
                src="/assets/LogoWhite.svg"
                alt="Capacity Logo"
                height={100}
                width={50}
              />
            </a>
            <div className="flex h-full w-full items-center">
              <h1
                id="header_logo"
                className="flex h-full w-28 items-center justify-center bg-accent px-4 text-xs font-bold uppercase tracking-widest text-accent-content"
              >
                Capacities
              </h1>
            </div>
            <Button
              variant="navigate"
              className="ml-auto px-4 hover:bg-transparent"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>

          {/* Team Selector */}
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
          </div>

          {/* Navigation */}
          <div
            className="mx-4 h-full items-center justify-center transition-all ease-in-out flex"
          >
            <ul
              className="relative flex h-full w-fit flex-col items-center justify-start pt-4"
            >
              {navLinkGroupsOwner.map((tab, index) => {
                return (
                  <Link
                    href={tab.url}
                    key={tab.key}
                  >
                    <li
                      key={tab.key}
                      id={tab.key}
                      className={`flex h-full min-h-full w-24 py-4 flex-1 cursor-pointer items-center justify-center whitespace-nowrap text-center text-primary-content no-underline ${pathname === tab.url ? `opacity-100 border-b-2 border-white` : `opacity-50`
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

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between border-t border-[#ffffff1a] p-4">          
            <Button
              variant="navigate"
              className="h-8 px-3 text-sm text-white/60 hover:text-white"
              onClick={() => {
                // Add logout logic here
              }}
            >
              Log Out
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
