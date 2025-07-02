import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export const LinkButton = ({lang, text}: {lang: string, text: string}) => {
  return (
    <Link 
      href={lang === 'en' ? "/en/specialni-akce" : "/specialni-akce"}  
      className="flex justify-center items-center gap-4 w-42 h-12 bg-yellow font-bold text-black cursor-pointer rounded-xl"
    >
        {text}
        <ChevronRightIcon className="w-4 h-4" />
    </Link>
  );
}