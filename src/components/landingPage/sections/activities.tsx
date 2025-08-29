import React from "react";
import { activities } from '@/data/activities';
import { Activity } from "@/types";
import { SectionTitle } from "../common/sectionTitle";
import { ActivityCard } from "../activityCard";

export const Activities = (
  {
    title,
    lang
  }: {
    title: string
    lang: string
  }) => {    
    
  return ( 
    <div className='max-w-[1280px] w-full flex flex-col justify-center gap-y-10 px-4 md:px-0' id="activities">
        <SectionTitle title={title} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6'>
          {
            activities
            .filter((activity: Activity | any) => activity.type === 'regular')
            .map((activity: any, index: number) => {
              return (
                <ActivityCard
                    key={index} 
                    activity={activity.translations[lang as keyof typeof activity.translations]} 
                    lang={lang}
                />
              )
            })
          }
        </div>
    </div>
  );
};  