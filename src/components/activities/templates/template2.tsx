"use client";

import Image from "next/image";
import Link from "next/link";
import { AnotherActivities } from "../anotherActivities";
import { useRouter } from "next/navigation";
import { JSX } from "react";
import { template2Data } from "@/data/templates/template2Data";
import { LinkButton } from "@/components/ui/linkButton";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { SundaysDescription } from "@/data/staticPages/sundaysDescription";
import { Hero } from "@/components/hero";

type Lang = "cs" | "en";

// Template pro Neděle na Runwayi
export const ActivityTemplate2 = ({
  name,
  time,
  place,
  image,
  contactTitle,
  contactIcon,
  contactPerson,
  contactLinkText,
  contactLink,
  anotherActivities,
  lang
}: {
  name: string,
  time: string[] | null,
  place: string,
  image: string,
  contactTitle: string | undefined,
  contactIcon: JSX.Element | null,
  contactPerson: string,
  contactLinkText: string,
  contactLink: string,
  anotherActivities: any[]
  lang: string
}) => {
    const router = useRouter();
    const staticData = template2Data.translations[lang as keyof typeof template2Data.translations];
    const SundaysDescriptionComponent = SundaysDescription[lang as Lang];
  return (
    <div className="flex flex-col items-center w-full min-h-screen mb-24">
      <Hero 
        name={name} 
        time={time} 
        place={place} 
        image={image} 
      />
      <div className="text-gray-9 text-base flex flex-col items-center gap-y-8 w-5/6 sm:w-1/2 my-8 md:my-24">
        {SundaysDescriptionComponent()}
      </div>

      {/* contact section */}
      <div className="flex flex-col justify-center items-center w-full bg-content-blue py-7.5 mt-10 gap-y-8">
        <p className="text-xl text-white font-bold">{contactTitle}</p>
        <div className="flex flex-col items-center gap-y-8">
            <div className="flex flex-col items-center gap-y-4 w-full max-w-screen-xl px-4">           
                {contactIcon && contactIcon}
                <p className="text-white text-base font-bold">{contactPerson}</p>
                <Link className="text-blue-3 font-semibold text-base" target="blank" href={contactLink ?? "/"}>{contactLinkText}</Link>
                </div>
            <div className="w-92 text-center">
              <button 
                  className="p-4 text-dark-blue bg-yellow rounded-xl font-bold text-base cursor-pointer"
                  onClick={()=> router.push(staticData.anotherContacts.href)}
              >
                  {staticData.anotherContacts.text}
              </button>
            </div>
        </div>      
      </div>

      {/* current topic section */}
      <div className="max-w-[900px] grid grid-cols-1 md:grid-cols-2 md:gap-x-24 items-center w-full mx-auto gap-x-8 px-4 md:px-0 py-8 md:py-24">
        <div className="relative w-full md:h-[400px] order-2 md:order-1">
          <Image src="/series.webp" alt="Services" className="w-full h-full object-cover rounded-lg mt-4 lg:mt-0" width={500} height={500} />
        </div>
        <div className="flex flex-col gap-y-6 order-1 md:order-2">
          <h2 className="text-gray-9 font-bold text-[32px]">{staticData.currentTopicTitle}</h2>
          <p className="text-gray-9 text-lg">{staticData.currentTopicText}</p>
        </div>
      </div>

      {/* another placed link section */}
      <div className="flex flex-col gap-y-8 items-center w-full bg-jasmin py-8 md:py-24 px-4 md:px-0">
        <h2 className="text-gray-9 font-bold text-[32px]">{staticData.anotherServicesTitle}</h2>
        <p className="text-gray-9 text-base w-full md:w-1/5 text-left md:text-center">{staticData.anotherServicesText}</p>
        <LinkButton 
          href={lang === "cs" ? "/o-nas" : "/en/o-nas"} 
          text={staticData.anotherServicesLink}
          icon={<ChevronRightIcon className="w-6 h-6" />}
          />
      </div>
      <AnotherActivities 
        activities={anotherActivities} 
        lang={lang}
      />
    </div>
  )
}