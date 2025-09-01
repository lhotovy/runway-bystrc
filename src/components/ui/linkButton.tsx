import Link from "next/link";
import React from "react";

export const LinkButton = ({   
  text,
  href,
  icon
}: {
  text: string, 
  href: string,
  icon?: React.ReactNode
}) => {
  return (
    <Link 
      href={href}  
      className="flex justify-center items-center gap-4 px-6 py-3 bg-yellow font-bold text-black cursor-pointer rounded-xl"
    >
      {text}
      {icon && icon}
    </Link>
  );
}