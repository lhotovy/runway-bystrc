import React from "react";
import { SectionTitle } from "../common/sectionTitle";
import { socialEmbed } from "@/data/socialEmbed";
import Image from "next/image";
import placeholderImage from "@/public/placeholder.webp";

export const Social = ({data}: {data: any}) => {
  return ( 
    <div className='max-w-[1280px] px-4 md:px-0 py-2 md:py-8 w-full flex flex-col justify-center gap-y-10'>
        <SectionTitle title={data?.socialText} />
        <div className="flex items-center w-full">
            <a className='grid lg:grid-cols-5 grid-cols-1 gap-x-3 gap-y-3 w-full' target="_blank" href="https://www.instagram.com/runway.bystrc/">
                {
                    socialEmbed.map((embed, index) => {
                        return (
                            <div key={index} className="cursor-pointer">
                                <Image src={embed.image || placeholderImage} alt={embed.alt} width={700} height={700} className="rounded-2xl object-cover aspect-square w-full h-full" />              
                            </div>
                        )
                    })
                }               
            </a>           
        </div>
    </div>
  );
};