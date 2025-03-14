"use client"
import { Activities } from '@/components/landingPage/sections/activities';
import { Social } from '@/components/landingPage/sections/social';
import { SpecialEvents } from '@/components/landingPage/sections/specialEvents';
import { Welcome } from '@/components/landingPage/sections/welcome';
import React from "react";

export default function HomePageDisplay() {
  return (  
    <div className="flex flex-col items-center justify-center gap-y-24 pb-32 min-h-screen">
      <Welcome />
      <Activities title='Co děláme' />
      <SpecialEvents />
      <Social />
    </div>
  )
}
