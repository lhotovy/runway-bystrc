import Link from "next/link";
import React from "react";
export function SpecialEventCard({
    activity
}: any) {
    return (
        <Link
            href={activity.slug} 
            className="flex flex-col justify-center py-5 px-6 rounded-2xl cursor-pointer bg-blue-1 hover:bg-blue-2"
        >
            <div className="flex items-center gap-x-2 text-sm text-blue-5 uppercase">
                {activity.cardDate && <p className="font-semibold bg-white py-[5px] px-[15px] rounded-xl">
                    {activity.cardDate}
                </p>}
                {activity.cardTime && <p className="font-semibold bg-white py-[5px] px-[15px] rounded-xl">
                    {activity.cardTime}
                </p>}
            </div>
            <div className="flex flex-col gap-y-[15px] pt-6 pb-4">
                <h3 className="text-xl font-bold">{activity.name}</h3>
                <p className="text-base text-gray-900">{activity.cardDescription}</p>
            </div>
        </Link>
    )
}
