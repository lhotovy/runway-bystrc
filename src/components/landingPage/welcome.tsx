import Image from "next/image";
import React from "react";
import { SiFacebook, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";

export const Welcome = () => {
    return (
        <div className="flex h-[400px] w-full">
            <div className="flex flex-col justify-center w-2/5 pl-24 gap-y-6">
                <h1 className="md:text-5xl text-3xl brightness-100 font-bold text-gray-900 relative">
                    Vítejte na Runwayi
                    <span className="absolute -bottom-1 left-0 w-[450px] h-4 -z-1 bg-teal-accent blur-xs rounded-2xl" />
                </h1>
                <p>Jsme otevřená komunita křesťanů v Brně - Bystrci</p>
                <div className="flex items-center gap-x-6 opacity-70 mt-8">
                    <SiInstagram className="w-7 h-7 cursor-pointer" />
                    <SiFacebook className="w-7 h-7 cursor-pointer" />
                    <SiYoutube className="w-7 h-7 cursor-pointer" />
                </div>
            </div>
            <div className="relative w-3/5 flex items-center">
                <div className="relative">
                    <Image
                        src="/beach.jpg"
                        alt="Image 1"
                        width={400}
                        height={400}
                        className="rounded-3xl border-8 border-white"
                    />
                    <Image
                        src="/beach.jpg"
                        alt="Image 2"
                        width={400}
                        height={400}
                        className="rounded-3xl border-8 border-white absolute top-24 left-64 -z-1"
                    />
                    <Image
                        src="/beach.jpg"
                        alt="Image 3"
                        width={400}
                        height={400}
                        className="rounded-3xl border-8 border-white absolute -top-12 left-120 -z-2"
                    />
                </div>
            </div>  
        </div>
    );
}
