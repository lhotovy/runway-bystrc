"use client"

import { Activities } from '@/components/landingPage/sections/activities';
import { Coffeeshop } from '@/components/landingPage/sections/coffeeshop';
import { Social } from '@/components/landingPage/sections/social';
import { SpecialEvents } from '@/components/landingPage/sections/specialEvents';
import { Sundays } from '@/components/landingPage/sections/sundays';
import { Welcome } from '@/components/landingPage/sections/welcome';
import { Map } from '@/components/landingPage/sections/map';
import { landingData } from '@/data/staticPages/landingPage';
import React from "react";

export default function HomePageDisplay({ lang }: { lang: string }) {
  const data = landingData.translations[lang as keyof typeof landingData.translations];
  return (  
    <div className="flex flex-col items-center justify-center gap-y-18 min-h-screen">
      <Welcome data={data} />
      <Activities 
        title={data?.activitiesText} 
        lang={lang}
      />
      <SpecialEvents 
        lang={lang}
        data={data} 
      />
      <Sundays 
        data={data} 
        lang={lang} 
      />
      <Coffeeshop 
        data={data} 
        lang={lang} 
      />   
      <Social data={data} />
      <Map />
    </div>
  )
}
