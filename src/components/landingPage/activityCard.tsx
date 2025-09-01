import { Activity } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import placeholderImage from "@/public/placeholder.webp";
import { LangOptions } from "@/types";

export const ActivityCard = ({ activity, lang }: {activity: Activity, lang: LangOptions}) => {    
  return (
    <Link href={lang === "en" ? `/en/${activity?.slug}` : `/${activity?.slug}`} className="flex items-center gap-x-4 rounded-xl px-5 py-6 cursor-pointer bg-blue-1 hover:bg-gray-2">
        <Image src={activity?.cardIcon || placeholderImage} alt={activity?.name} width={52} height={52} className="cursor-pointer text-blue-5" />
        <div className="flex flex-col gap-y-1.5">
            <h3 className="text-lg font-bold text-gray-9">{activity?.name}</h3>
            <p className="text-base text-gray-7">{activity?.cardDescription}</p>
        </div>
    </Link>);
}

