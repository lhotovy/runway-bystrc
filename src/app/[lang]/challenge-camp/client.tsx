"use client";

import { Clock4, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnotherActivities } from "../../../components/activities/anotherActivities";
import { useRouter } from "next/navigation";
import { activities, specialActivitiesCard } from "@/data/activities";
import { challengeCampData } from "@/data/staticPages/challengeCamp";
import placeholderImage from "@/public/placeholder.webp";
import { LangOptions } from "@/types";
import { Button } from "@/components/ui/button";

export const ChallengeCampClient = ({ lang }: { lang: LangOptions }) => {
  const router = useRouter();
  const campData = challengeCampData.translations[lang as keyof typeof challengeCampData.translations];

  const anotherActivities = [
    ...activities.filter((activity) => activity.type === "regular"),
    specialActivitiesCard,
  ].map((activity) => {
    const translatedActivity = activity.translations[lang as keyof typeof activity.translations];
    return {
      ...translatedActivity,
      template: activity.template || undefined,
      type: activity.type || "unknown",
    };
  });

  return (
    <div className="flex flex-col items-center w-full my-10 lg:mt-24 min-h-screen">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col justify-center items-center gap-y-10 px-4 md:px-0">
          <h1 className="text-5xl text-gray-9 font-semibold">{campData.name}</h1>
          <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-10 text-blue-5 uppercase text-sm">
            {campData.time.map((timeItem, index) => (
              <p className="flex items-center gap-x-2" key={index}>
                <Clock4 size={24} />
                {timeItem}
              </p>
            ))}
            <p className="flex items-center gap-x-2">
              <MapPin size={24} />
              {campData.place}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-2 justify-center items-center w-full gap-x-4">
            <p>{campData.highlights[0]}</p>
            <p className="text-gray-5 text-2xl mx-4 hidden lg:flex">•</p>
            <p>{campData.highlights[1]}</p>
            <p className="text-gray-5 text-2xl mx-4 hidden lg:flex">•</p>
            <p>{campData.highlights[2]}</p>
          </div>
          <div className="text-gray-9 text-base flex flex-col items-start gap-y-8 max-w-[850px] px-4 md:px-0">
            {campData.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-1 flex flex-col items-center mt-10 py-6 px-4 md:px-0">
        <div className="max-w-[1280px] flex flex-col justify-start items-start px-4 lg:px-0 py-7.5 gap-y-8">
          {campData.pricing.map((priceDetail, index) => (
            <p key={index}>{priceDetail}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full py-12">
        <div className="flex flex-col lg:flex-row gap-y-24 w-full items-center justify-center gap-x-48">
          <div className="flex flex-col items-center gap-y-4 px-4">
            <p className="text-xl text-gray-9 font-bold">{campData.contactTitle}</p>
            {campData.contactIcon && campData.contactIcon}
            <p className="text-gray-8 text-base font-bold">{campData.contactPerson}</p>
            <Link className="text-blue-5 font-semibold text-base" href={campData.contactLink ?? "/"}>
              {campData.contactLinkText}
            </Link>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            {campData.registrationDeadline && <p className="text-xl text-gray-9 font-bold">{campData.registrationDeadline}</p>}
            <Button
              variant="blue"
              text={campData.registrationButton}
              className="w-48"
              onClick={() => router.push(lang === "cs" ? "/prihlaska/challenge-camp" : "/en/prihlaska/challenge-camp")}
            />
            {/* <p className="text-xl text-gray-9 font-bold">Přihlašování uzavřeno</p> */}
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-5 py-16 text-sm lg:text-base px-4 md:px-0">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-xl font-bold text-white mb-8 px-4 lg:px-0">Program dne</p>
          <div className="grid grid-cols-2 lg:grid-cols-6 mx-auto text-white px-4 lg:px-0">
            <div className="font-semibold w-24 flex flex-col col-span-1 gap-y-3">
              {campData.program.map((item, index) => (
                <p key={index}>{item.time}</p>
              ))}
            </div>
            <div className="col-span-1 lg:col-span-5 flex flex-col gap-y-3">
              {campData.program.map((item, index) => (
                <p key={index}>{item.activity}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 w-full">
        <p className="text-xl italic w-full lg:w-96 px-6 lg:px-0">{campData.testimonial}</p>
        <h2 className="text-[32px] font-bold mt-16 mb-8">{campData.pastCampsTitle}</h2>
        <iframe
          className="w-full max-w-[1000px] h-[400px] lg:h-[600px]"
          src={campData.youtubeVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full py-16 max-w-[1000px]">
        {campData.imageGallery.map((image, index) => (
          <Image
            key={index}
            src={image || placeholderImage}
            alt={`Image ${index + 1}`}
            width={300}
            height={200}
            className="object-cover p-2 rounded-3xl"
          />
        ))}
      </div>
      <AnotherActivities 
        activities={anotherActivities} 
        lang={lang} 
      />
    </div>
  );
};