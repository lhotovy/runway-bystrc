import Image from "next/image";
import React from "react";
import { SocialIcons } from "../socialIcons";

export const Welcome = ({data}: {data: any}) => {
    return (
        <div className="flex lg:flex-row flex-col w-full my-10 lg:mt-18 overflow-x-hidden">
            <div className="flex flex-col items-center justify-center w-full lg:w-2/5 gap-y-6">
                <h1 className="md:text-5xl text-3xl brightness-100 font-bold text-gray-900 relative">
                    {data.title}
                    <span className="absolute -bottom-1 left-0 w-[450px] h-4 -z-1 bg-teal-accent blur-xs rounded-2xl" />
                </h1>
                <p>{data.description}</p>
                <div className="text-center mb-8">
                    <SocialIcons />
                </div>
           
            </div>
            <div className="relative w-full lg:w-3/5 flex items-center mt-12">
                {/* Slider for mobile screens */}
                <div className="sm:hidden w-full overflow-x-scroll flex snap-x snap-mandatory px-4 scrollbar-hide">
                    <div className="snap-center flex-shrink-0 w-[90%] flex justify-center">
                        <Image
                            src="/welcome1.webp"
                            alt="Image 1"
                            width={300}
                            height={300}
                            className="rounded-3xl border-8 border-white"
                        />
                    </div>
                    <div className="snap-center flex-shrink-0 w-[90%] flex justify-center">
                        <Image
                            src="/welcome2.webp"
                            alt="Image 2"
                            width={300}
                            height={300}
                            className="rounded-3xl border-8 border-white"
                        />
                    </div>
                    <div className="snap-center flex-shrink-0 w-[90%] flex justify-center">
                        <Image
                            src="/welcome3.webp"
                            alt="Image 3"
                            width={300}
                            height={300}
                            className="rounded-3xl border-8 border-white"
                        />
                    </div>
                </div>
                {/* Overlapping images for larger screens */}
                <div className="hidden sm:block relative h-[700px] lg:h-[450px]">
                    <Image
                        src="/welcome1.webp"
                        alt="Image 1"
                        width={300}
                        height={300}
                        className="rounded-3xl border-8 border-white"
                    />
                    <Image
                        src="/welcome2.webp"
                        alt="Image 2"
                        width={300}
                        height={300}
                        className="rounded-3xl border-8 border-white absolute top-24 left-64 -z-1"
                    />
                    <Image
                        src="/welcome3.webp"
                        alt="Image 3"
                        width={300}
                        height={300}
                        className="rounded-3xl border-8 border-white absolute -top-12 left-120 -z-2"
                    />
                </div>
            </div>
        </div>
    );
};