import { SpecialEventCard } from '../specialEventCard';
import React from "react";
import { SectionTitle } from "../common/sectionTitle";
import { activities } from '@/data/activities';
import { LinkButton } from '@/components/ui/linkButton';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export const SpecialEvents = ({
    lang, 
    data
}: {
    lang: string, 
    data: any
}) => {    
    const filteredActivities = activities
    .filter((activity) => activity.type === 'special')
    .filter((activity) => {
        const filterDate = activity.translations[lang as keyof typeof activity.translations]?.filterDate;
        return filterDate && new Date(filterDate) >= new Date();
    });    
    
  return ( 
    <div className="relative w-full h-92 flex flex-col justify-center py-10 px-4 md:px-0 mt-2 md:mt-10 bg-[url('/den_deti.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 flex flex-col w-full max-w-[1280px] mx-auto gap-y-8 px-3 md:px-0 rounded-xl">
            <SectionTitle title={data?.specialEventsText} className='text-white' />
            <div className="flex items-center w-full">
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-5'>
                    {
                        filteredActivities.length > 0 ?
                        filteredActivities                       
                        .map((activity, index) => {
                            return (
                            <SpecialEventCard 
                                    key={index}   
                                    activity={activity} 
                                    type="landing"
                                    lang={lang}
                                />
                            )
                        })
                        :
                        <div className="flex justify-center items-center text-white py-4 px-6 font-semibold text-base">
                            <p>V nejbližší době neplánujeme žádné speciální akce.</p>
                        </div>
                    }
                    <div 
                        className="flex justify-center items-center text-blue-5 py-4 px-6 font-semibold text-base"
                    >
                      <LinkButton   
                        text={data?.allEventsText}
                        href={lang === 'en' ? "/en/specialni-akce" : "/specialni-akce"}
                        icon={<ChevronRightIcon className="w-4 h-4" />}
                    />  
                    </div>
                </div>           
            </div>
        </div>
    </div>
  );
};