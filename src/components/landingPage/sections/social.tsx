import React from "react";
import { SectionTitle } from "../common/sectionTitle";
import Link from "next/link";
import { socialEmbed } from "@/data/socialEmbed";
import Image from "next/image";
import placeholderImage from "@/public/placeholder.webp";
export const Social = ({data}: {data: any}) => {
  return ( 
    <div className='py-8 w-full flex flex-col justify-center gap-y-10'>
        <SectionTitle title={data?.socialText} />
        <div className="flex items-center w-full">
            <div className='grid lg:grid-cols-5 grid-cols-3 gap-x-3 gap-y-3 w-full'>
                {
                    socialEmbed.map((embed, index) => {
                        return (
                            <Link key={index} href={embed.href} className="cursor-pointer">
                                <Image src={embed.image || placeholderImage} alt={embed.alt} width={400} height={400} className="rounded-2xl"  />              
                            </Link>
                        )
                    })
                }               
            </div>           
        </div>
    </div>
  );
};