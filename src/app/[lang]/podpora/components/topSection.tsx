"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { supportUsData } from "@/data/staticPages/supportUs";
import { LangOptions } from "@/types";

export const TopSection = ({ lang }: { lang: LangOptions }) => {
    const target = 13000000;
    const actual = 8000000;
    const data = supportUsData.translations[lang].topSection;

    return (
        <section className="flex flex-col lg:flex-row w-full justify-center items-center gap-8 lg:gap-x-48">
            <section className="w-full max-w-[380px] lg:max-w-none top-section-carousel">
                <Carousel className="w-full max-w-[380px] lg:w-[380px]" opts={{ align: "start", loop: false }}>
                    <CarouselContent>
                        <CarouselItem>
                            <Image src="/hub/1.webp" alt="Runway Hub" width={900} height={900} className="w-full h-full object-cover" priority />         
                        </CarouselItem>
                        <CarouselItem>
                            <Image src="/hub/2.webp" alt="Runway Hub" width={900} height={900} className="w-full h-full object-cover" />        
                        </CarouselItem>
                        <CarouselItem>
                            <Image src="/hub/3.webp" alt="Runway Hub" width={900} height={900} className="w-full h-full object-cover" />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src="/hub/4.webp" alt="Runway Hub" width={900} height={900} className="w-full h-full object-cover" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="rounded-full" />
                    <CarouselNext className="rounded-full" />
                </Carousel>
            </section>
            <section className="flex flex-col gap-8 w-full max-w-[500px] lg:max-w-none  px-4 lg:px-0">
                <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">{data.title}</h1>
                <p className="text-center lg:text-left">
                    {data.progressQuestion}
                </p>
                <div className="flex flex-col gap-2">
                    <Progress value={actual / target * 100} className="w-full" />
                    <div className="flex flex-row justify-between">
                        <p>{data.currentAmount}</p>
                        <p>{data.targetAmount}</p>
                    </div>
                </div>
                <p className="max-w-[500px] text-center lg:text-left">{data.thankYouMessage}</p>
                <Button variant="yellow" text={data.donateButton} className="w-fit mx-auto lg:mx-0" onClick={() => {
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth'
                    });
                }} />
            </section>
        </section>
    )
}
