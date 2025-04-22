import Link from "next/link";
import React from "react";

export function SpecialEventCard({
    activity,
    type,
    lang
}: any) {    
    const data = activity.translations[lang as keyof typeof activity.translations];    
    
    return (
        <Link
            href={lang === "en" && !data?.slug.startsWith("/en") ? `/en/${data?.slug}` : data?.slug ?? "/"}
            className={`flex flex-col items-start  py-5 px-6 rounded-2xl cursor-pointer ${type === "landing" ? "bg-white" :  "bg-blue-1"} hover:bg-blue-2`}
        >
            <div className="flex items-center gap-x-2 text-sm text-blue-5 uppercase">
                {data?.cardDate && <p className={`font-semibold ${type === "landing" ? "bg-blue-1" : "bg-white"} py-[5px] px-[15px] rounded-xl`}>
                    {data?.cardDate}
                </p>}
                {data?.cardTime && <p className="font-semibold bg-white py-[5px] px-[15px] rounded-xl">
                    {data?.cardTime}
                </p>}
            </div>
            <div className="flex flex-col gap-y-[15px] pt-6 pb-4">
                <h3 className="text-xl font-bold">{data?.name}</h3>
                <p className="text-base text-gray-900">{data?.cardDescription}</p>
            </div>
        </Link>
    )
}
