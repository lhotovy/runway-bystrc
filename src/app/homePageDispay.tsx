"use client"
import { Activities } from '@/components/landingPage/activities';
import { Upcoming } from '@/components/landingPage/upcoming';
import { Welcome } from '@/components/landingPage/welcome';
import React from "react";

export default function HomePageDisplay() {
  return (  
    <div className="flex flex-col items-center justify-center gap-y-24 pb-24">
      <Welcome />
      <Activities />
      <Upcoming />
    </div>
  )
}
