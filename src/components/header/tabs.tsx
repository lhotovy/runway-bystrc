"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/menu";
import CompleteLanguageSwitcher from "../langSwitcher";
import { defaultLocale } from "@/middleware";
import { menuTexts } from "@/data/staticPages/menu";
import { LangOptions } from "@/types";

export const HeaderTabs = ({ lang }: { lang: LangOptions | null }) => {
  const data = menuTexts[lang as keyof typeof menuTexts];
  const isDefaultLocale = lang === defaultLocale;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">{data.aboutUs}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[250px] gap-3">
              {data.aboutUsDropdown?.map((activity) => (
                <ListItem
                  key={activity.name}
                  title={activity.name}
                  href={activity.url}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">{data.activities}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[250px] gap-3">
              {data.activitiesDropdown?.map((activity) => (
                <ListItem
                  key={activity.name}
                  title={activity.name}
                  href={activity.url}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href={isDefaultLocale ? '/specialni-akce' : `/${lang}/specialni-akce`}
            className={navigationMenuTriggerStyle()}
            passHref
          >
            {data.specialEvents}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href={isDefaultLocale ? '/kontakt' : `/${lang}/kontakt`}
            className={navigationMenuTriggerStyle()}
            passHref
          >
            {data.contact}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <CompleteLanguageSwitcher currentLang={lang || 'cs'} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 text-gray-9 text-base rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-gray-1",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
