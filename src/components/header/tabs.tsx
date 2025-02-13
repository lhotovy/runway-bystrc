"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const HeaderTabs = () => { 
  
    const navLinkGroupsOwner = [
        { name: "O nás", url: "/planning", icon: "Calendar", key: "key1" },
        { name: "Co děláme", url: "/overview", icon: "Home", key: "key2" },
        { name: "Akce", url: "/times", icon: "Clock", key: "key4" },
        { name: "Kontakt", url: "/users", icon: "Settings", key: "key5" }
    ];  
 
  // determine the index of pathname in menuItems
  const pathname = usePathname();
  const currentIndex = navLinkGroupsOwner
    .map((item) => item.url)
    .indexOf(pathname as string);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(
    currentIndex <= navLinkGroupsOwner.length && currentIndex >= 0
      ? currentIndex
      : null,
  );

  const handleMenuItemHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  const calculateMovingHrMargin = () => {
    if (hoveredIndex !== null) {
      return `calc(${(100 * hoveredIndex) / navLinkGroupsOwner.length}%)`;
    } else if (currentIndex === -1) {
      return `calc(${(100 * 0) / navLinkGroupsOwner.length}%)`;
    } else {
      return `calc(${(100 * currentIndex) / navLinkGroupsOwner.length}%)`;
    }
  };

  return (
    <div
      id="header-tabs"
      className="mx-4 h-full min-w-[500px] items-center justify-left transition-all ease-in-out hidden md:flex md:flex-row"
    >
      <ul
        id="header-links"
        className="relative flex h-full w-fit flex-row items-center justify-center"
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
                className={`flex h-full min-h-full w-24 py-4 flex-1 cursor-pointer items-center justify-center whitespace-nowrap text-center text-primary-content no-underline ${
                    pathname === tab.url ? `opacity-100` : `opacity-50`
                }  transition-all duration-300 hover:opacity-100`}
                onMouseEnter={() => handleMenuItemHover(index)}
                onMouseLeave={() => handleMenuItemHover(null)}
            >
                    <p className="text-sm uppercase">{tab.name}</p>
                </li>
            </Link>
        );
        })}
        <span
          id="moving-hr"
          className={`absolute bottom-0 left-0 h-1 border-none bg-white transition-all duration-300 ease-in-out ${
            currentIndex === -1 && hoveredIndex === null
              ? `opacity-0`
              : `opacity-100`
          }`}
          style={{
            marginLeft: calculateMovingHrMargin(),
            width: `calc(${100 / navLinkGroupsOwner.length}%)`,             
          }}
        />
      </ul>
    </div>
  );
}