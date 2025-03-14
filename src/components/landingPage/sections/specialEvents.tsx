import { SpecialEventCard } from '../specialEventCard';
import React from "react";
import { lpUpcoming } from '@/data/lpUpcoming';
import { SectionTitle } from "../common/sectionTitle";

export const SpecialEvents = () => {
  return ( 
    <div className=' w-full flex flex-col justify-center gap-y-10'>
        <SectionTitle title="Speciální akce" />
        <div className="flex items-center w-full">
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-4'>
                {
                    lpUpcoming.map((activity, index) => {
                        return (
                           <SpecialEventCard 
                                key={index}   
                                activity={activity}  
                            />
                        )
                    })
                }
                <div 
                    className="flex justify-center items-center text-blue-5 py-4 px-6 font-semibold text-base"
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