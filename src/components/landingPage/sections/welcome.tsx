import Image from "next/image";
import React from "react";
import { SocialIcons } from "../socialIcons";
import { LinkButton } from "@/components/ui/linkButton";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const Welcome = ({ data }: { data: any }) => {
    return (
        <div
            className="relative w-[calc(100vw-15px)] h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden mb-10"
            //style={{ maxWidth: "100vw" }}
        >
            {/* Background Image */}
            <Image
                src="/hero.jpg"
                alt="Welcome Background"
                fill
                style={{ objectFit: "cover" }}
                className="z-0"
                priority
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
                <h1 className="md:text-5xl text-3xl font-bold text-white mb-4 drop-shadow-lg">
                    {data?.title}
                </h1>
                <p className="text-white mb-4 max-w-2xl drop-shadow-md">{data?.description}</p>
                <SocialIcons />
                <div className="mt-24">
                    <LinkButton 
                        href="#activities"
                        text="Víc o nás"
                        icon={<ChevronDownIcon className="w-4 h-4" />}
                    />
                </div>
            </div>
        </div>
    );
};