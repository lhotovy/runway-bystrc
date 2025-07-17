"use client";

import { Activities } from "@/components/landingPage/sections/activities";
import { SpecialEventCard } from "@/components/landingPage/specialEventCard";
import { Button } from "@/components/ui/button";
import { activities } from "@/data/activities";
import { useState } from "react";
import { specialniAkce } from "@/data/staticPages/specialniAkce";
import Image from "next/image";
import { LinkButton } from "@/components/ui/linkButton";

export const SpecialEventsClient = ({lang}: {lang: string}) => { 
    const texts = specialniAkce.translations[lang as keyof typeof specialniAkce.translations];    
    const [selectedBadge, setSelectedBadge] = useState(texts.upcoming);
    const kontaktLink = lang === "cs" ? "/kontakt" : "/en/kontakt";
    const filteredActivities = activities.filter((activity) => {
        const translation = activity.translations[lang as keyof typeof activity.translations];
        return activity.type === 'special' && (selectedBadge === texts.upcoming
            ? translation.filterDate && new Date(translation.filterDate) >= new Date() 
            : translation.filterDate && new Date(translation.filterDate) < new Date());
    });

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
            <div>                
                {
                    filteredActivities.length === 0 
                    ? (
                        <div className="flex items-center justify-center h-full my-12">                         
                            <p className="text-gray-7">{texts.fallback}</p>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-4 mb-12">
                            {
                                filteredActivities
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
                    )
                }
            </div>
            <div className="relative w-[calc(100vw-8px)] -mx-[calc((100vw-100%)/2)]">
                <Image className="w-full h-[300px] object-cover" src="/bystrc.webp" alt="Bystrc" width={2000} height={2000} />       
                <div className="absolute inset-0 flex items-center justify-center">
                    <LinkButton
                        text="Kontaktuj nás"
                        href={kontaktLink}
                    />
                </div>
            </div>
            <Activities 
                title={texts.otherActivities}  
                lang={lang} 
            />
          </div>
        </div>
      )
}