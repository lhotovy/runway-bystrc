import Image from "next/image";
import React from "react";
import { SocialIcons } from "../socialIcons";
import { LinkButton } from "@/components/ui/linkButton";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const Welcome = ({ data }: { data: any }) => {
    return (
        <div
            className="relative w-full h-[70vh] lg:h-[80vh]  flex items-center justify-center overflow-hidden mb-2 md:mb-10"
        >
            {/* Background Image */}
            <Image
                src="/hero.webp"
                alt="Welcome Background"
                fill
                style={{ objectFit: "cover" }}
                className="z-0"
                priority
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-2" />
            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-3 px-4">
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