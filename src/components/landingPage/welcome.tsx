import Image from "next/image";
import React from "react";
import { SocialIcons } from "./socialIcons";

export const Welcome = () => {
    return (
        <div className="flex lg:flex-row flex-col w-full my-10 lg:mt-24">
            <div className="flex flex-col justify-center w-full lg:w-2/5 gap-y-6">
                <h1 className="md:text-5xl text-3xl brightness-100 font-bold text-gray-900 relative">
                    Vítejte na Runwayi
                    <span className="absolute -bottom-1 left-0 w-[450px] h-4 -z-1 bg-teal-accent blur-xs rounded-2xl" />
                </h1>
                <p>Jsme otevřená komunita křesťanů v Brně - Bystrci</p>
               <SocialIcons     />
            </div>
            <div className="relative w-3/5 flex items-center">
                <div className="relative">
                    <Image
                        src="/socialEmbed/social7.png"
                        alt="Image 1"
                        width={300}
                        height={300}
                        className="rounded-3xl border-8 border-white"
                    />
                    <Image
                        src="/socialEmbed/social8.png"
                        alt="Image 2"
                        width={300}
                        height={300}
                        className="rounded-3xl border-8 border-white absolute top-24 left-64 -z-1"
                    />
                    <Image
                        src="/socialEmbed/social9.png"
                        alt="Image 3"
                        width={300}
                        height={300}
                        className="rounded-3xl border-8 border-white absolute -top-12 left-120 -z-2"
                    />
                </div>
            </div>  
        </div>
    );
}