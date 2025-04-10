import { Activity } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const ActivityCard = ({ activity }: {activity: Activity}) => {
  return (
    <Link href={activity?.slug} className="flex items-center gap-x-4 rounded-xl px-5 py-6 cursor-pointer bg-gray-1 hover:bg-gray-2">
        <Image src={activity?.cardIcon} alt={activity?.name} width={52} height={52} className="cursor-pointer" />
        <div className="flex flex-col gap-y-1.5">
            <h3 className="text-lg font-bold text-gray-9">{activity?.name}</h3>
            <p className="text-base text-gray-7">{activity?.cardDescription}</p>
        </div>
    </Link>);
}

