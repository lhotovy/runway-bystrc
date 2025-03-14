"use client";

import { Activities } from "@/components/landingPage/sections/activities";
import { SpecialEventCard } from "@/components/landingPage/specialEventCard";
import { Button } from "@/components/ui/button";
import { specialEvents } from "@/data/specialEventsPage";
import { useState } from "react";

export const SpecialEventsClient = () => {
    const [selectedBadge, setSelectedBadge] = useState("Nadcházející");

    return (
        <div className="flex flex-col py-18">
          <div className="flex flex-col gap-y-12">
            <h1 className="text-4xl font-bold">Speciální akce</h1>
            <div className="">              
                <div className="flex gap-x-6 mt-6">
                    <Button 
                        variant="badge" 
                        text="Nadcházející" 
                        className={`${selectedBadge === "Nadcházející" ? "text-blue-5" : "text-gray-7"}`}  
                        onClick={() => setSelectedBadge("Nadcházející")}
                    />                
                    <Button 
                        variant="badge" 
                        text="Minulé" 
                        className={`${selectedBadge === "Minulé" ? "text-blue-5" : "text-gray-7"}`} 
                        onClick={() => setSelectedBadge("Minulé")}
                    />
                </div>
            </div>            
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-4 mb-24'>                {
                    specialEvents.map((event, index) => {
                        return (
                            <SpecialEventCard key={index} activity={event} />
                        )
                    })
                }
            </div>
            <Activities title="Ostatní pravidelné aktivity" />
          </div>
        </div>
      )
}