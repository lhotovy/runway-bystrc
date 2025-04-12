"use client"

import { Activities } from '@/components/landingPage/sections/activities';
import { Social } from '@/components/landingPage/sections/social';
import { SpecialEvents } from '@/components/landingPage/sections/specialEvents';
import { Welcome } from '@/components/landingPage/sections/welcome';
import { landingData } from '@/data/staticPages/landingPage';
import React from "react";

export default function HomePageDisplay({ lang }: { lang: string }) {
  const data = landingData.translations[lang as keyof typeof landingData.translations];
  return (  
    <div className="flex flex-col items-center justify-center gap-y-24 pb-32 min-h-screen">
      <Welcome data={data} />
      <Activities 
        title={data?.activitiesText} 
        lang={lang}
      />
      <SpecialEvents 
        lang={lang}
        data={data} 
      />
      <Social data={data} />
    </div>
  )
}
