import { SpecialEventCard } from '../specialEventCard';
import React from "react";
import { SectionTitle } from "../common/sectionTitle";
import Link from 'next/link';
import { activities } from '@/data/activities';

export const SpecialEvents = ({lang}: {lang: string}) => {
  return ( 
    <div className="w-[calc(100vw-15px)] flex flex-col justify-center bg-gray-1 py-10 mt-10">
        <div className="flex flex-col w-full max-w-[1280px] mx-auto gap-y-8 px-3 md:px-0">
            <SectionTitle title="Speciální akce" />
            <div className="flex items-center w-full">
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-5'>
                    {
                        activities
                        .filter((activity) => activity.type === 'special')
                        .map((activity, index) => {
                            return (
                            <SpecialEventCard 
                                    key={index}   
                                    activity={activity?.translations[lang as keyof typeof activity.translations]} 
                                    type="landing"
                                />
                            )
                        })
                    }
                    <div 
                        className="flex justify-center items-center text-blue-5 py-4 px-6 font-semibold text-base"
                    >
                        <Link 
                            href="/specialni-akce" 
                            className="flex justify-center items-center w-36 h-14 bg-white hover:bg-blue-2 cursor-pointer rounded-xl"
                        >
                            Všechny akce
                        </Link>                    
                    </div>
                </div>           
            </div>
        </div>
    </div>
  );
};