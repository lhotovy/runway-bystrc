"use client"

import { navigation } from "@/data/navigation";
import { NavLink } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";


export const Header = () => {

  const pathname = usePathname();  
  const [expanded, setExpanded] = useState("hidden");
 
  return (
    <header className="flex justify-center items-center">
      <nav className="flex justify-center fixed w-full z-20 top-0 left-0">
      <div className="flex mx-auto items-center pl-6 py-4 md:w-[750px] w-full justify-between absolute top-10 gap-x-10">
        <Link 
          className="flex items-center" 
          href="/"
          data-test="logoButton" 
        >
        <Image 
          src="/runway_cerne.png" 
          className="h-16 mr-2 invert" 
          alt="Company logo"
          width={70}
          height={40}
        />
        </Link>      
            {/* Desktop menu */}
        <div 
          className={`items-center hidden justify-center ${expanded} md:flex md:order-1`} 
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
            {navigation.map((link: NavLink) => {
            return (
              <li key={link.id}>
              <Link 
                href={link.href} 
                className={`${pathname == link.href ? "active" : ""} block py-2 pl-3 pr-4 tracking-wider text-white uppercase bg-slate-700 rounded md:bg-transparent md:hover:text-slate-300 md:p-0 md:dark:hover:text-slate-300`} 
                aria-current="page"                                                
              >
                {link.name}
              </Link>
              </li>
            )})}
          </ul>
        </div>
        <div 
          className="flex md:hidden flex-wrap items-center justify-between w-full" 
          id="navbar-hamburger"
        >         
          <button 
            data-collapse-toggle="navbar-hamburger" 
            type="button"
            onClick={()=> (expanded == "hidden") ? setExpanded("block") : setExpanded("hidden")}     
            className="z-20 r-0 p-2 w-10 h-10 mx-2 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600" 
            aria-controls="navbar-hamburger" 
            aria-expanded="false"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>           
        </div>
      </div>
      </nav> 
      <div 
        className={`${expanded} w-full fixed md:top-20 top-40 z-40`} 
        id="navbar-hamburger-items"
      >
      <ul className="flex p-2 flex-col font-medium rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        {navigation.map((link: NavLink)=> {
        return (           
        <li key={link.id}>
          <Link 
            href={link.href} 
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"           
          >
          {link.name}
          </Link>
        </li>          
        )})}         
      </ul>
      </div>  
    </header>  
  );
};