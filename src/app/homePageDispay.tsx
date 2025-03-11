"use client"
import { Activities } from '@/components/landingPage/sections/activities';
import { Social } from '@/components/landingPage/sections/social';
import { Upcoming } from '@/components/landingPage/sections/upcoming';
import { Welcome } from '@/components/landingPage/sections/welcome';
import React from "react";

export default function HomePageDisplay() {
  return (  
    <div className="flex flex-col items-center justify-center gap-y-24 pb-32 min-h-screen">
      <Welcome />
      <Activities />
      <Upcoming />
      <Social />
    </div>
  )
}
