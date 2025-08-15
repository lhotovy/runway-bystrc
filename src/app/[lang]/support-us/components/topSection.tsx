"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { supportUsData } from "@/data/staticPages/supportUs";

export const TopSection = ({ lang }: { lang: "cs" | "en" }) => {
    const target = 13000000;
    const actual = 8000000;
    const data = supportUsData.translations[lang].topSection;

    return (
        <section className="flex flex-row w-full justify-center items-center gap-x-48">
            <section>
                <Carousel className="w-fit">
                    <CarouselContent>
                        <CarouselItem>
                            <Image src="/placeholder.webp" alt="Runway Hub" width={380} height={380} />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="rounded-full" variant="white" />
                    <CarouselNext className="rounded-full" variant="white" />
                </Carousel>
            </section>
            <section className="flex flex-col gap-8">
                <h1 className="text-4xl font-bold">{data.title}</h1>
                <p>
                    {data.progressQuestion}
                </p>
                <div className="flex flex-col gap-2">
                    <Progress value={actual / target * 100} className="w-full" />
                    <div className="flex flex-row justify-between">
                        <p>{data.currentAmount}</p>
                        <p>{data.targetAmount}</p>
                    </div>
                </div>
                <p className="max-w-[500px]">{data.thankYouMessage}</p>
                <Button variant="yellow" text={data.donateButton} className="w-fit" onClick={() => {
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth'
                    });
                }} />
            </section>
        </section>
    )
}
