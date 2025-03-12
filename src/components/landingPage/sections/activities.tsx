import React from "react";
import { activities } from '@/data/activities';
import { Activity } from "@/types";
import { SectionTitle } from "../common/sectionTitle";
import { ActivityCard } from "../activityCard";

export const Activities = () => {
  return ( 
    <div className=' w-full flex flex-col justify-center gap-y-10'>
        <SectionTitle title="Co děláme" />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6'>
          {
            activities.map((activity: Activity, index: number) => {
              return (
                <ActivityCard
                    key={index} 
                    activity={activity}                     
                />
              )
            })
          }
        </div>
    </div>
  );
};  