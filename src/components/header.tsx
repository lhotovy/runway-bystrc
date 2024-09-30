"use client"
import { navigation } from "@/data/navigation";
import { NavLink } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { List, ListItem } from "@mui/material";

export const Header = () => {

  const pathname = usePathname();  
  const [expanded, setExpanded] = useState("hidden");

  const onHover = (link: any) => {
    if (link.nested) {
      console.log(link)
      return (
        <List className="m-auto text-black mt-100">
          <ListItem>
            {link.nested[0].name}
          </ListItem>
        </List>
      )
    }
  }
  
  return (
    <>
      <nav className="bg-white fixed w-screen z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-lg">
        <div className="flex flex-wrap mx-auto items-center justify-between pl-6 py-4 w-5/6">
          <Link 
            className="flex items-center" 
            href="/"
            data-test="logoButton" 
          >
            <Image 
              src="/logo.jpeg" 
              className="h-12 mr-2" 
              alt="Company logo"
              width={230}
              height={20}
            />
          </Link>
          
        <div 
          className={`items-center hidden justify-between ${expanded} md:flex md:order-1`} 
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white dark:border-gray-700">
            {navigation.map((link: NavLink) => {
              return (
                <li key={link.id}>
                  <Link 
                    href={link.href} 
                    className={`${pathname == link.href ? "active" : ""} block py-2 pl-3 pr-4 tracking-wider text-rose-800 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500`} 
                    aria-current="page"
                    onMouseOver={()=> onHover(link)}                               
                  >
                    {link.name}
                  </Link>
                </li>
              )})}
          </ul>
        </div>
        <div 
          className="flex md:hidden flex-wrap items-center justify-between" 
          id="navbar-sticky"
        >         
            <button 
              data-collapse-toggle="navbar-hamburger" 
              type="button"
              onClick={()=> (expanded == "hidden") ? setExpanded("block") : setExpanded("hidden")}     
              className="flex items-center justify-center p-2 w-10 h-10 mx-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
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
      <div className={`${expanded} w-full fixed top-20`} id="navbar-hamburger">
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
    </>  
  );
};