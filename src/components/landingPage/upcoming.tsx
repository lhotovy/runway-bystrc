import React from "react";
import { lpUpcoming } from '@/data/lpUpcoming';
import { SectionTitle } from "./common/sectionTitle";
import Link from "next/link";

export const Upcoming = () => {
  return ( 
    <div className='h-[400px] w-full flex flex-col justify-center gap-y-10'>
        <SectionTitle title="Speciální akce" />
        <div className="flex items-center w-full">
            <div className='flex justify-between w-full'>
                {
                    lpUpcoming.map((activity, index) => {
                        return (
                            <Link key={index} href={activity.href} className="flex flex-col justify-center w-[350px] py-5 px-6 rounded-xl cursor-pointer bg-blue-1 hover:bg-blue-2">
                                <div className="flex items-center gap-x-2 text-sm text-blue-5 uppercase">
                                    {
                                        activity.date && 
                                        <p className="font-semibold bg-white py-[5px] px-[15px] rounded-xl">
                                            {activity.date}
                                        </p>
                                    }
                                    {
                                        activity.time && 
                                        <p className="font-semibold bg-white py-[5px] px-[15px] rounded-xl">
                                            {activity.time}
                                        </p>
                                    }
                                </div>
                                <div className="flex flex-col gap-y-[15px] pt-6 pb-4">
                                    <h3 className="text-xl font-bold">{activity.name}</h3>
                                    <p className="text-base text-gray-900">{activity.description}</p>   
                                </div>                          
                            </Link>
                        )
                    })
                }
                <div 
                    className="flex justify-center items-center text-blue-5 py-4 px-6  font-semibold text-base"
                >
                    <p className="flex justify-center items-center w-36 h-14 bg-white hover:bg-gray-1 cursor-pointer rounded-xl">
                        Zobrazit vše
                    </p>
                    
                </div>
            </div>           
        </div>
    </div>
  );
};