import React from "react";
import Image from 'next/image';
import { lpActivities } from '@/data/lpActivities';
import { Activity } from "@/types";
import { SectionTitle } from "./common/sectionTitle";

export const Activities = () => {
  return ( 
    <div className='h-[400px] w-full flex flex-col justify-center gap-y-10'>
        <SectionTitle title="Co děláme" />
        <div className='grid grid-cols-3 gap-x-6 gap-y-6'>
          {
            lpActivities.map((activity: Activity, index: number) => {
              return (
                  <div key={index} className="flex items-center gap-x-4 rounded-xl px-5 py-6 cursor-pointer bg-gray-1 hover:bg-gray-2">
                    <Image 
                      src={activity.icon}
                      alt="Neděle na Runwayi" 
                      width={52} 
                      height={52} 
                      className=" cursor-pointer" 
                    />
                    <div className="flex flex-col gap-y-1.5">
                      <h3 className="text-lg font-bold text-gray-9">{activity.name}</h3>
                      <p className="text-base text-gray-7">{activity.description}</p>
                    </div>
                  </div>
              )
            })
          }
        </div>
    </div>
  );
};  