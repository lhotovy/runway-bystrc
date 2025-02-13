"use client"
import { Activities } from '@/components/landingPage/activities';
import { Welcome } from '@/components/landingPage/welcome';
import React from "react";

export default function HomePageDisplay() {
  return (  
    <div className="flex flex-col items-center justify-center">
      <Welcome />
      <Activities />
    </div>
  )
}
