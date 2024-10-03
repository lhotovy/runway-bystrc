"use client"

import { Button } from "@/components/button";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (  
    <div
      className="flex flex-col items-center"
    >
      <div 
        className="flex flex-col gap-y-4 min-h-screen items-center justify-center brightness-[0.4]" 
        style={{ 
          backgroundImage: 'url(beach.jpg)', 
          backgroundSize: 'cover', 
          height: '90vh', 
          width: "100%"     
        }} 
      />     
      <h1 className="absolute text-center mt-10 mx-auto top-80 text-8xl brightness-100 z-10 font-semibold uppercase tracking-wider text-white">Vítejte na Runwayi</h1>
      <Link
        href="#co-delame"
        className="mx-auto absolute top-80 mt-80 z-20"
      >
        <Button 
          text="Zjisti co děláme"
          variant="navigate"                
        />
      </Link>
      <div 
        id="co-delame"
        className="h-80 bg-sky-800 w-screen"
      >
        dfsf
      </div>
    </div>
  )
}
