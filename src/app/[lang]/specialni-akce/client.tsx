"use client";

import { Activities } from "@/components/landingPage/sections/activities";
import { SpecialEventCard } from "@/components/landingPage/specialEventCard";
import { Button } from "@/components/ui/button";
import { activities } from "@/data/activities";
import { useState } from "react";
import { specialniAkce } from "@/data/staticPages/specialniAkce";

export const SpecialEventsClient = ({lang}: {lang: string}) => { 
    const texts = specialniAkce.translations[lang as keyof typeof specialniAkce.translations];    
    const [selectedBadge, setSelectedBadge] = useState(texts.upcoming);

    return (
        <div className="flex flex-col py-18">
          <div className="flex flex-col gap-y-12">
            <h1 className="text-4xl font-bold">{texts.title}</h1>
            <div className="">              
                <div className="flex gap-x-6 mt-6">
                    <Button 
                        variant="badge" 
                        text={texts.upcoming} 
                        className={`${selectedBadge === texts.upcoming ? "text-blue-5 border-blue-5" : "text-gray-7 border-transparent"}`}  
                        onClick={() => setSelectedBadge(texts.upcoming)}
                    />                
                    <Button 
                        variant="badge" 
                        text={texts.past} 
                        className={`${selectedBadge === texts.past ? "text-blue-5 border-blue-5" : "text-gray-7 border-transparent"}`}  
                        onClick={() => setSelectedBadge(texts.past)}
                    />
                </div>
            </div>            
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-4 mb-24'>                
                {
                    activities
                    .filter((activity) => {
                        const translation = activity.translations[lang as keyof typeof activity.translations];
                        
                        return activity.type === 'special' && (selectedBadge === texts.upcoming
                            ? translation.filterDate && new Date(translation.filterDate) >= new Date() 
                            : translation.filterDate && new Date(translation.filterDate) < new Date());
                    })
                    .map((event, index) => {
                        return (
                            <SpecialEventCard 
                                key={index} 
                                activity={event} 
                                lang={lang} 
                            />
                        )
                    })
                }
            </div>
            <Activities 
                title={texts.otherActivities}  
                lang={lang} 
            />
          </div>
        </div>
      )
}